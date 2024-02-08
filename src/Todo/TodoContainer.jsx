import { useState } from "react";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const defaultTodo = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [todos, setTodos] = useState([defaultTodo]);
  return (
    <div className="pb-10 min-h-full">
      <h1 className="text-3xl font-mono font-bold bg-sky-100 text-yellow-500 px-8 rounded-2xl py-1">
        Add Your Todo`s
      </h1>
      <div className=" mt-10  bg-slate-100 px-4 py-4 rounded-3xl">
        <TodoActions />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                todos.map(todo=><TodoList key={todo.id} todo={todo} />)
            }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
