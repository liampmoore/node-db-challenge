const db = require('../data/dbConfig');


const get = async () => {
    try {
        const tasks = await db('tasks');
        return tasks;
    }
    catch(err) {
        console.error(err)
    }
}

const getById = (id) => {
    try {
        const task = db.select('tasks')
            .where("id", id)
            .first();
        return task;
    }
    catch (err) {
        console.error(err)
    }
}

const add = async (newTask) => {
    try {
        const ids = await db('tasks').insert(newTask);
        if (ids.length !== 0) {
            const task = await getById(ids[0]);
            return task;
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
        const tasks = await db
            .select("*")
            .from("tasks")
            .where("project_id", id)
        const project = await db
            .select("project_name", "project_description")
            .from("projects")
            .where("id", id)
            .first()
        const projectTasks = {
            ...project,
            tasks: tasks.length !== 0 ? tasks : null
        }
        return projectTasks;
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

