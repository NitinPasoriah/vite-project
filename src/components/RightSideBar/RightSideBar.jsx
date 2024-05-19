import React from 'react';
import Card from './../Card/Card';
import TodoList from './../TodoList/TodoList';
import './RightSideBar.css';

function RightSideBar() {
  return (
    <div className="rightsidebar">
      <Card count={25} status="Not Yet Opened" color="red" />
      <Card count={25} status="In Progress" color="purple" />
      <Card count={50} status="Completed" color="green" />
      <h3>To Do's</h3>
      <TodoList />
    </div>
  );
}

export default RightSideBar;
