// calculator.test.js
const { add, multiply } = require('./calculator');

console.log("Running tests...");

// Test 1
if (add(2, 3) === 5) {
    console.log("✅ Add test passed");
} else {
    console.log("❌ Add test failed");
    process.exit(1);
}

// Test 2
if (multiply(2, 3) === 6) {
    console.log("✅ Multiply test passed");
} else {
    console.log("❌ Multiply test failed");
    process.exit(1);
}

console.log("🎉 All tests passed!");
