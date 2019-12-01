import test from "ava";
const method = require("./");

test("example 1", t => {
	const input = ["14"];
	const result = method(input);
	t.is(result, 2);
});

test("example 2", t => {
	const input = ["1969"];
	const result = method(input);
	t.is(result, 966);
});

test("example 4", t => {
	const input = ["100756"];
	const result = method(input);
	t.is(result, 50346);
});
