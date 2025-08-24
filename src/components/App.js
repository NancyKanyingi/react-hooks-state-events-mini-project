import React from "react";
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleDelete(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));

    let filteredTasks;

if (selectedCategory === "All") {
  filteredTasks = tasks; 
} else {
  filteredTasks = tasks.filter(task => task.category === selectedCategory); // filter by category
}
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
      <TaskList />
    </div>
  );
}

export default App;
