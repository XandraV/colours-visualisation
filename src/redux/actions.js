export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        id: todo.id,
        title: todo.title,
    }
}
export function deleteTodo(todo) {
    return {
        type: "DELETE_TODO",
        id: todo.id
    }
}
export function updateTodo(todo) {
    return {
        type: "UPDATE_TODO",
        id: todo.id
    }
}
