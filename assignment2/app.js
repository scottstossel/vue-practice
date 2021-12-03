const app = Vue.createApp({
  data() {
    return {
      input: '',
      confirmedInput: ''
    }
  },
  methods: {
    showAlert() {
      alert('You clicked the button!!!');
    },
    setInput(event) {
      this.input = event.target.value;
    },
    enterInput(event) {
      this.confirmedInput = event.target.value;
    },
    resetInput() {
      
    }
  }
});

app.mount('#assignment');