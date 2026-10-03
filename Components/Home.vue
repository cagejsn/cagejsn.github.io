<script lang="ts">

const CYCLE = 10000

const SENTENCES = [
    ['is an', 'engineer', 'who gets things done'],
    ['is an', 'engineer', 'who challenges the status quo'],
    ['is a', 'designer', 'who gets things done'],
    ['is a', 'designer', 'who challenges the status quo'],
    ['is a', 'builder', 'who gets things done'],
    ['is a', 'builder', 'who challenges the status quo'],
    ['is an', 'engineering leader', 'who gets things done'],
    ['is an', 'engineering leader', 'who challenges the status quo'],
    ['is a', 'team player', 'who gets things done'],
    ['is a', 'team player', 'who challenges the status quo'],
    ['loves to', 'create', ''],
    ['loves to', 'build', ''],
    ['loves to', 'learn', ''],
    ['loves to', 'learn about', 'engineering'],
    ['loves to', 'learn about', 'design'],
    ['loves to', 'learn about', 'building'],
    ['wants to', 'build', 'companies'],
    ['thinks', 'outside the box', ''],
]

function shuffle(list) {
    const copy = list.slice()
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const swap = copy[i]
        copy[i] = copy[j]
        copy[j] = swap
    }
    return copy
}

export default {
    props: {
        active: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            sentences: [],
            index: 0,
            spinning: false,
            reels: [],
            liveText: '',
            timer: null,
            spinTimer: null,
            frame: null,
            flipTimer: null,
            sand: 1,
            flipping: false,
            snapping: false,
        }
    },

    computed: {
        topH() {
            return (28 * this.sand).toFixed(2)
        },
        topY() {
            return (34 - 28 * this.sand).toFixed(2)
        },
        botH() {
            return (28 * (1 - this.sand)).toFixed(2)
        },
        botY() {
            return (66 - 28 * (1 - this.sand)).toFixed(2)
        },
        streamOn() {
            return this.sand > 0.04 && this.sand < 0.97 && !this.flipping && !this.spinning
        },
    },

    created() {
        this.sentences = shuffle(SENTENCES)
        this.index = Math.floor(Math.random() * this.sentences.length)
        this.reels = this.settledReels(this.sentences[this.index])
        this.liveText = this.sentenceText(this.sentences[this.index])
    },

    watch: {
        active(on) {
            if (on) this.schedule()
            else this.stop()
        },
    },

    mounted() {
        this.onVis = () => {
            if (document.hidden || !this.active) this.stop()
            else this.schedule()
        }
        document.addEventListener('visibilitychange', this.onVis)
        this.schedule()
    },

    beforeUnmount() {
        this.stop()
        document.removeEventListener('visibilitychange', this.onVis)
    },

    methods: {
        sentenceText(slots) {
            return ['Cage', ...slots.filter(Boolean)].join(' ') + '.'
        },

        settledReels(slots) {
            return slots.map((word) => ({
                phrases: [word],
                wordSizers: word ? word.split(' ') : [],
                offset: 0,
                duration: 0,
                blank: word === '',
            }))
        },

        columnWords(col) {
            const values = this.sentences.map((slots) => slots[col]).filter(Boolean)
            return [...new Set(values)]
        },

        wordSizers(current, target) {
            const a = current ? current.split(' ') : []
            const b = target ? target.split(' ') : []
            const n = Math.max(a.length, b.length)
            const sizers = []
            for (let i = 0; i < n; i++) {
                const left = a[i] || ''
                const right = b[i] || ''
                sizers.push(left.length >= right.length ? left : right)
            }
            return sizers
        },

        phraseFits(phrase, sizers) {
            const parts = phrase.split(' ')
            if (parts.length > sizers.length) return false
            return parts.every((part, i) => part.length <= sizers[i].length)
        },

        wordAt(phrase, index) {
            if (!phrase) return ''
            return phrase.split(' ')[index] || ''
        },

        isLastVisible(col) {
            for (let i = this.reels.length - 1; i >= 0; i--) {
                if (!this.reels[i].blank) return i === col
            }
            return false
        },

        isLastWord(col, wi) {
            const reel = this.reels[col]
            if (!reel || wi !== reel.wordSizers.length - 1) return false
            return this.isLastVisible(col)
        },

        reduced() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches
        },

        cancelFrame() {
            if (this.frame) {
                cancelAnimationFrame(this.frame)
                this.frame = null
            }
        },

        // Snap back to upright with the sand already in the top, so the
        // 180° flip does not play in reverse.
        finishFlip() {
            if (!this.flipping) return
            clearTimeout(this.flipTimer)
            this.snapping = true
            this.flipping = false
            this.sand = 1
            this.maybeSchedule()
            requestAnimationFrame(() => {
                this.snapping = false
            })
        },

        onFlipEnd(event) {
            if (event.propertyName !== 'transform') return
            this.finishFlip()
        },

        playFlip() {
            if (this.reduced()) return
            clearTimeout(this.flipTimer)
            this.snapping = false
            const from = this.sand
            const start = performance.now()
            const dumpMs = from < 0.04 ? 0 : 220
            const step = (now) => {
                const t = dumpMs === 0 ? 1 : Math.min(1, (now - start) / dumpMs)
                this.sand = from * (1 - t)
                if (t < 1) {
                    this.frame = requestAnimationFrame(step)
                    return
                }
                this.sand = 0
                this.flipping = true
                this.flipTimer = setTimeout(() => this.finishFlip(), 900)
            }
            if (dumpMs === 0) {
                this.sand = 0
                this.flipping = true
                this.flipTimer = setTimeout(() => this.finishFlip(), 900)
            } else {
                this.frame = requestAnimationFrame(step)
            }
        },

        maybeSchedule() {
            if (this.spinning || this.flipping) return
            this.schedule()
        },

        schedule() {
            clearTimeout(this.timer)
            this.cancelFrame()
            if (!this.active || document.hidden || this.spinning || this.flipping) return
            if (this.reduced()) {
                this.sand = 1
                this.timer = setTimeout(() => this.spin(), CYCLE)
                return
            }
            this.sand = 1
            this.deadline = performance.now() + CYCLE
            this.frame = requestAnimationFrame(() => this.tick())
        },

        tick() {
            if (this.spinning || this.flipping || !this.active || document.hidden) return
            const left = this.deadline - performance.now()
            if (left <= 0) {
                this.sand = 0
                this.spin()
                return
            }
            this.sand = left / CYCLE
            this.frame = requestAnimationFrame(() => this.tick())
        },

        stop() {
            clearTimeout(this.timer)
            clearTimeout(this.spinTimer)
            clearTimeout(this.flipTimer)
            this.cancelFrame()
            this.spinning = false
            this.snapping = true
            this.flipping = false
            this.sand = 1
            if (this.sentences.length) {
                this.reels = this.settledReels(this.sentences[this.index])
            }
        },

        spin() {
            if (this.spinning || !this.active) return
            clearTimeout(this.timer)
            this.cancelFrame()
            const next = (this.index + 1) % this.sentences.length
            const target = this.sentences[next]
            const current = this.sentences[this.index]

            if (this.reduced()) {
                this.index = next
                this.reels = this.settledReels(target)
                this.liveText = this.sentenceText(target)
                this.schedule()
                return
            }

            this.spinning = true
            this.playFlip()
            this.reels = target.map((word, col) => {
                const cur = current[col] || ''
                const nxt = word || ''
                if (!cur && !nxt) {
                    return { phrases: [''], wordSizers: [], offset: 0, duration: 0, blank: true }
                }
                const sizers = this.wordSizers(cur, nxt)
                const pool = this.columnWords(col).filter((item) => this.phraseFits(item, sizers))
                const source = pool.length ? pool : [nxt || cur]
                const decoys = []
                for (let i = 0; i < 7; i++) {
                    decoys.push(source[Math.floor(Math.random() * source.length)])
                }
                return {
                    phrases: [cur, ...decoys, nxt],
                    wordSizers: sizers,
                    offset: 0,
                    duration: 0,
                    blank: false,
                }
            })

            const durations = target.map((_, col) => 880 + col * 280)
            this.$nextTick(() => {
                requestAnimationFrame(() => {
                    this.reels = this.reels.map((reel, col) => ({
                        ...reel,
                        offset: Math.max(0, reel.phrases.length - 1),
                        duration: durations[col],
                    }))
                })
            })

            this.spinTimer = setTimeout(() => {
                this.index = next
                this.reels = this.settledReels(target)
                this.liveText = this.sentenceText(target)
                this.spinning = false
                this.maybeSchedule()
            }, Math.max(...durations) + 60)
        },
    },
}

</script>
<template>
    <div class="page home">
        <div class="home-hero">
            <button type="button" class="sentence" @click="spin" :aria-label="liveText">
                <span
                    class="hourglass"
                    :class="{ 'is-flipping': flipping, 'is-snapping': snapping }"
                    aria-hidden="true"
                >
                    <span class="hourglass-inner" @transitionend="onFlipEnd">
                        <svg class="hourglass-svg" viewBox="0 0 48 72">
                            <defs>
                                <clipPath id="hg-top"><path d="M8 6H40L28 34H20Z" /></clipPath>
                                <clipPath id="hg-bot"><path d="M20 38H28L40 66H8Z" /></clipPath>
                            </defs>
                            <path class="hg-glass" d="M8 6H40L28 34H20Z" />
                            <path class="hg-glass" d="M20 38H28L40 66H8Z" />
                            <rect class="hg-sand" clip-path="url(#hg-top)" x="6" :y="topY" width="36" :height="topH" />
                            <rect class="hg-sand" clip-path="url(#hg-bot)" x="6" :y="botY" width="36" :height="botH" />
                            <rect class="hg-sand hg-stream" x="22.6" y="33" width="2.8" height="6.4" :opacity="streamOn ? 1 : 0" />
                            <path class="hg-frame" d="M8 6H40L28 34H20Z" />
                            <path class="hg-frame" d="M20 38H28L40 66H8Z" />
                            <path class="hg-frame" d="M5 6H43M5 66H43" />
                        </svg>
                    </span>
                </span>
                <span class="sentence-text">
                    <span class="slot-fixed" aria-hidden="true">Cage</span><span
                        v-for="(reel, col) in reels"
                        :key="col"
                        class="slot-group"
                        :class="{ 'is-blank': reel.blank }"
                        aria-hidden="true"
                    >
                        <template v-if="!spinning"><span class="slot-phrase"><span class="slot-ink">{{ reel.phrases[0] }}{{ isLastVisible(col) ? '.' : '' }}</span></span></template>
                        <template v-else>
                            <span
                                v-for="(sizer, wi) in reel.wordSizers"
                                :key="wi"
                                class="slot-window"
                                :class="{ 'is-empty': sizer === '' }"
                            >
                                <span class="slot-sizer">{{ sizer }}{{ isLastWord(col, wi) ? '.' : '' }}</span>
                                <span
                                    class="slot-strip"
                                    :style="{
                                        transform: 'translateY(calc(' + (-reel.offset) + ' * var(--slot-line)))',
                                        transitionDuration: reel.duration + 'ms',
                                    }"
                                >
                                    <span v-for="(phrase, row) in reel.phrases" :key="col + '-' + wi + '-' + row" class="slot-word">{{ wordAt(phrase, wi) }}{{ isLastWord(col, wi) ? '.' : '' }}</span>
                                </span>
                            </span>
                        </template>
                    </span>
                </span>
            </button>
            <p class="sr-only" aria-live="polite">{{ liveText }}</p>
        </div>
    </div>
</template>
