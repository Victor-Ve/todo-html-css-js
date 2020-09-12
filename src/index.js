import { saludar, crearTodoHtml } from "./js/componentes.js";
import { Todo, TodoList } from "./classes";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach((todo) => {
  crearTodoHtml(todo);
});

console.log(todoList);
