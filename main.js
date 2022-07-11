
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

new Vue({
  el: '#app',

  data: function () {
    return content
  },

  template: '<div><section-bio v-bind:bio="bio"> </section-bio> <section-links v-bind:links="links"></section-links></div>',

  created: function () {
    $.getJSON("content.json", function (data) {
      content.bio = data.bio;
      content.links = data.links
    });
  }
})

