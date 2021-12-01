const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Get good enough at Vue to pass this interview',
      courseGoalB: 'Master Vue and build amazing apps',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal')