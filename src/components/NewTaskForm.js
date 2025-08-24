import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";

import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";
import App from "../components/App";

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [text, setText] = useState("");
  const [category, setCategory] = useState(
    categories.find(cat => cat !== "All") || ""
  );

  function handleSubmit(e) {
    e.preventDefault(); 
    onTaskFormSubmit({ text, category }); 
    setText(""); 
    setCategory(categories.find(cat => cat !== "All") || ""); 
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text"
        placeholder="New task"
        value={text}
        onChange={e => setText(e.target.value)}
        name = "text"/>
      </label>
      <label>
        Category
         <input type="text" 
         value="Add task"
         />
          <select
         name="category"
          value={category} 
          onChange={e => setCategory(e.target.value)} 
          >
          {/* render <option> elements for each category here */}
          
          
           {categories
          .filter(cat => cat !== "All") 
          .map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        </label>
         <button type="submit">Add Task</button>
      </form>
  );
}

export default NewTaskForm;
