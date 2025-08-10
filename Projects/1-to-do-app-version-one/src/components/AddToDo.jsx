import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddToDo ({onNewItem}) {
const todoNameElement = useRef();
const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    event.preventDefault();
    const todoItem = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = '';
    dueDateElement.current.value = '';
    onNewItem(todoItem, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="Enter ToDo Here"/>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}/>
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;