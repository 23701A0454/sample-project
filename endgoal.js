function reachGoals(steps) {
  steps.forEach((step, index) => {
    console.log(`Step ${index + 1}: ${step}`);
  });
  console.log("🎯 End Goal: Success achieved!");
}
const mySteps = [
  "Define the problem",
  "Brainstorm solutions",
  "Implement the best option",
  "Test and refine"
];

reachGoals(mySteps);
