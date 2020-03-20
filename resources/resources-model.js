const db = require('../data/dbConfig');


const get = async () => {
    try {
        const resources = await db('resources');
        return resources;
    }
    catch(err) {
        console.error(err)
    }
}

const getById = (id) => {
    try {
        const resource = db.select('resources')
            .where("id", id)
            .first();
        return resource;
    }
    catch (err) {
        console.error(err)
    }
}

const add = async (newResource) => {
    try {
        const ids = await db('resources').insert(newResource);
        if (ids.length !== 0) {
            const resource = await getById(ids[0]);
            return resource;
        }
        else {
            return null
        }
    }
    catch(err) {
        console.error(err)
    }
}

const getByProjectId = async (id) => {
    try {
        const resources = await db
            .select("r.id", "r.resource_name", "r.resource_description")
            .from("resources as r")
            .join("project_resources as pr", "r.id", "pr.resource_id")
            .where("pr.project_id", id)
        return resources.length !== 0 ? resources : null;
    }
    catch(err) {
        console.error(err)
    }
}

module.exports = {
    get,
    getById,
    add,
    getByProjectId
}

