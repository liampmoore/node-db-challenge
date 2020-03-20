const db = require('../data/dbConfig');


const get = () => {
    return db('projects')
}

const getById = (id) => {
    return db('projects')
        .where("id", id)
        .first();
}

const add = async (newProject) => {
    try {
        const ids = await db('projects').insert(newProject);
        if (ids.length !== 0) {
            const project = await getById(ids[0]);
            return project;
        }
        else {
            return null
        }
    }
    catch(err) {
        console.error(err)
    }
}


module.exports = {
    get,
    getById,
    add
}

