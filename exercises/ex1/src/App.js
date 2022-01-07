import "./App.css";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

function App() {
  let item = useSelector((state) => state.listReducer.todoList);
  return (
    <div className="App">
      <h2 className="App-header">Exercise 1</h2>
      <div className="App-body">
        <AddForm />
        <div className="tabHeader">
          <h2>Todo List</h2>
          <div className="tabRows">
            {item.map((xx) => (
              <TodoList
                key={xx.id}
                id={xx.id}
                title={xx.title}
                estHrs={xx.estHrs}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
