export function Todos({todos}){
    return <div>
       {todos.map(function(todo){
        // return <Todo title={todo.title} description={todo.description}></Todo>
        return <div>
            <h4>{todo.title}</h4>
            <h5>{todo.description}</h5>
            <button>{todo.completed == true ? 'Completed' : 'Mark as Completed'}</button>
            </div>
    })}
    </div>
}