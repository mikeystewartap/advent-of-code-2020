import test from 'ava';
const method = require('./');

test('example 1', t => {
	const input = ["12"];
	const result = method(input);
	t.is(result, 2);
});

test('example 2', t => {
	const input = ["14"];
	const result = method(input);
	t.is(result, 2);
});

test('example 3', t => {
	const input = ["1969"];
	const result = method(input);
	t.is(result, 654);
});


test('example 4', t => {
	const input = ["100756"];
	const result = method(input);
	t.is(result, 33583);
});

