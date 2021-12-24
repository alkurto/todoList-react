import React from "react";
import TodoList from "./ToDO/TodoList";
import Context from "./context";
import AddTodo from "./ToDO/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: true, title: "Купить молоко" },
    { id: 3, completed: false, title: "Купить масло" },
  ]);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <div className="wrapper">
          <h1>React tutorial</h1>
          <AddTodo onCreate={addTodo} />
          {todos.length ? (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              className="todo-list"
            />
          ) : (
            <p>No todos!</p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
