const app = Vue.createApp({
  data() {
    return {
      name: "Scotty",
      myAge: 25,
      imgUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-10/28/14/asset/buzzfeed-prod-fastlane02/sub-buzz-31621-1477679003-1.jpg?output-quality=auto&output-format=auto&downsize=640:*'
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
})

app.mount('#assignment');