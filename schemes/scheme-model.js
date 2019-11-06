const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
	addStep
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where('id', id).first();
}

// select * from steps
// join schemes on steps.scheme_id = schemes.id
// where scheme_id = 1;
function findSteps(id) {
	return db
		.select('*')
		.from('steps')
		.join('schemes', 'steps.scheme_id', '=', 'schemes.id')
		.where('steps.scheme_id', id);
}

function add(scheme) {
	return db('schemes').insert(scheme);
}

function update(changes, id) {
	return db('schemes').where({ id }).update(changes);
}

function remove(id) {
	return db('schemes').where({ id }).del();
}

function addStep(step, scheme_id) {
	console.log(scheme_id, step.step_number);
	return db('steps').insert({
		scheme_id: scheme_id,
		step_number: step.step_number,
		instructions: step.instructions,
		scheme_name: step.scheme_name
	});
}
