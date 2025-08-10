import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newToDoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems((currValue) => [
      ...currValue, {name: itemName, dueDate: itemDueDate},
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newToDoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
    </center>
  ); 
}

export default App;
