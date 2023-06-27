import './App.css';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import Todolist from './Components/Todolist/Todolist';

function App() {
  return (
    <div className="main">
      <CreateTodo />
      <Todolist />
    </div>
  );
}

export default App;
