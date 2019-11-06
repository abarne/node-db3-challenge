const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
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
	return db.select('*').from('steps').join('schemes', 'steps.id', '=', 'steps.scheme_id').where('schemes.id', id);
}

function add(scheme) {
	return db('schemes').insert(scheme);
}

function update(changes, id) {
	return db('schemes').where({ id }).update(changes);
}

function remove(id) {}
