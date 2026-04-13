const assert = require('assert');
const total = require("./script");

console.log("Running our test: What is 4 + 4?");

assert.strictEqual(total, 8, "Math is broken!");

console.log("Test passed! ✅");
