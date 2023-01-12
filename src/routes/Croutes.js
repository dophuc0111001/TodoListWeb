import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";
import Timeline from "../component/Timeline";

function Croutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/todos" element={<TodoList/>} />
      <Route path="/todos/input" element={<TodoForm/>} />
      <Route path="/todos/timeline" element={<Timeline/>} />
    </Routes>
  );
}

export default Croutes;
