
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
  template: '<iframe allowtransparency="true" src="{{ url }}#toolbar=0&navpanes=0&scrollbar=0&view=FitH" type="application/pdf" frameBorder="0" scrolling="auto" style="width: 100%; height: 100%"></iframe>'
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

