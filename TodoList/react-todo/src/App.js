import "./App.css";
import Header from "./comps/fragment/Header";
import Hidden_nav from "./comps/fragment/Hidden_nav";
import Nav from "./comps/fragment/Nav";
import TodoList from "./comps/TodoList";
import "./css/nav.css";
import "./css/item.css";
import "./css/input.css";

function App() {
  return (
    <div className="App">
      <Hidden_nav />
      <Nav />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
