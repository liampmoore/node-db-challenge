const db = require('../data/dbConfig');


const get = async () => {
    try {
        const projects = await db('projects');
        return projects;
    }
    catch(err) {
        console.error(err)
    }
}

const getById = (id) => {
   try {const project = db.select('projects')
        .where("id", id)
        .first();}
    catch(err) {
        console.error(err)
    }
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

