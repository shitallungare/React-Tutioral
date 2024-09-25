import "./App.css";
import Header from "./Components/Header";
import { Todo } from "./Components/Todo";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";


function App() {
  let todos = [
    {
      sno:1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno:3,
      title:"Go to the beach",
      desc: "You need to go to the market to get this job done"
    },
  ]
  return (
    <>
      <Header title="My Todos List" />
      <Footer />
      <Todo />
      <Todos todos={todos}/>
    </>
  );
}

export default App;
