const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.goal === "") {
        alert("Type somethign to add");
      } else if (this.goal !== "") {
        this.goals.push(this.goal);
        console.log(this.goals);
        this.goal = "";
      }
    },
    deleteGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
