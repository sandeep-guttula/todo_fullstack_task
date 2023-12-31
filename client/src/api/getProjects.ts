export type Project = {
    project_id: number,
    project_name: string,
    created_at: string,
}

const getProjects = async () : Promise<Project[]> => {
    const response = await fetch('https://todo-backend-render.onrender.com/projects',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json() ;   
}

export default getProjects;
