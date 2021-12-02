import "./App.css";
import Header from "./comps/Header";
import Nav from "./comps/Nav";
import TodoList from "./comps/TodoList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
