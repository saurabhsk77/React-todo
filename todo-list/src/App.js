import "./App.css";
import Todo from "./component/Todo";
import TodoApi from "./component/API/TodoApi";
import UnControlled from "./component/uncontrolled";
import UserDetailsComponent from "./UserDetailsComponent";
import UseReducer from "./component/Hooks/useReducer";
function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <TodoApi /> */}
      {/* <UnControlled /> */}
      {/* <UserDetailsComponent /> */}
      <UseReducer />
    </div>
  );
}

export default App;
