import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("strike");
  }
  return (
    <li className="todo-item">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button className="rm-btn" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
