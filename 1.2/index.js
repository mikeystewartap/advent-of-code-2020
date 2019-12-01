const _ = require('lodash');

const calculateFuelForMass = mass => {
	const fuelAmounts = [];
	while (mass > 0) {
		mass = Math.floor(mass / 3) - 2;
		if (mass > 0) {
			fuelAmounts.push(mass);
		}
	}
	return _.sum(fuelAmounts);
};

const main = input => _.chain(input).map(calculateFuelForMass).sum().value();
module.exports = main;