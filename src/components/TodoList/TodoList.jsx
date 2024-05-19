import React from 'react';
import './TodoList.css';

function TodoList() {
  return (
    <div className="todo-list">
      <ul>
        <li>
          <span className="todo-text">NAAC Submission</span>
          <span className="todo-date overdue">Overdue 23:59 - 9 May 2024</span>
        </li>
        <li>
          <span className="todo-text">QS World Ranking Submission</span>
          <span className="todo-date overdue">Overdue 23:59 - 9 May 2024</span>
        </li>
      </ul>
      <button className="add-button">Add</button>
    </div>
  );
}

export default TodoList;
