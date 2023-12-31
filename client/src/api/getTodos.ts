export type Todos = {
    task_id: number,
    project_id: number,
    task_name: string,
    start_date: string,
    end_date: string,
    status: string,
    created_at: string,
}


const getTodos = async (project_id:number) : Promise<Todos[]> => {
    const response = await fetch(`https://todo-backend-render.onrender.com/todos/${project_id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json() ;   
}

export const getTodo = async (project_id:number, task_id:number) : Promise<Todos> => {
    const response = await fetch(`https://todo-backend-render.onrender.com/${project_id}/${task_id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json() ;
}

export default getTodos;