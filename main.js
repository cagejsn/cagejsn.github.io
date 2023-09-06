
var content = {
  "message": "Hello",
  "bio": "hello",
  "links": ["google.com", "linkedin.com"]
}

Vue.component("section-bio", {
  props: ["bio"],
  template: "<h2><p> {{bio}} </p></h2>"

})

Vue.component("section-links", {
  props: ["links"],
  template: '<div><li v-for="link in links" > {{link}} </li ></div>'
})

Vue.component("resume", {
  props: ["url"],
  template: '<embed src="{{ url }}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" frameBorder="0" scrolling="auto" height="100%" width="100%"></embed>'
})

new Vue({
  el: '#app',

  data: function () {
    return content
  },

  template: '<resume url="./resume.pdf"></resume>',

  created: function () {
    $.getJSON("content.json", function (data) {
      content.bio = data.bio;
      content.links = data.links
    });
  }
})

