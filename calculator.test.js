echo 'const { add, multiply } = require("./calculator");

console.log("Running tests...");

if (add(2, 3) === 5) {
    console.log("✅ Add test passed");
} else {
    console.log("❌ Add test failed");
    process.exit(1);
}

if (multiply(2, 3) === 6) {
    console.log("✅ Multiply test passed");
} else {
    console.log("❌ Multiply test failed");
    process.exit(1);
}

console.log("🎉 All tests passed!");' > calculator.test.js
