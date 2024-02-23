let stepsCount = 0;
let caloriesBurned = 0;

function recordSteps() {
    stepsCount += Math.floor(Math.random() * 1000) + 1; // Simulating random steps
    updateDisplay();
}

function calculateCalories() {
    caloriesBurned += stepsCount * 0.05; // Assuming 1 step burns 0.05 calories
    updateDisplay();
}

function resetTracker() {
    stepsCount = 0;
    caloriesBurned = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("steps").innerText = stepsCount;
    document.getElementById("calories").innerText = caloriesBurned.toFixed(2);
}
