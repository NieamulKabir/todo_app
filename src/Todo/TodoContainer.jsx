import { useEffect, useState } from "react";
import TodoActions from "./TodoActions";
import TodoList from "./TodoList";
import AddTodoModal from "./AddTodoModal";
import toast from "react-hot-toast";

const TodoContainer = () => {
  // default set a todo for understanding the ui

  const [showAddModal, setShowAddModal] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [storeTodo, setStoreTodo] = useState([]);

  // Load todos from  local storage on component mount
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });

  // Update local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setStoreTodo(storedTodos);
  }, [todos]);

  //add a single todo and also update todo corresponding id
  const handleAddEditTodo = (newTodo, isAdd) => {
    if (isAdd) {
      setTodos([...todos, newTodo]);

      toast.success("Successfully added Todo");
    } else {
      setTodos(
        todos.map((todo) => {
          if (todo.id === newTodo.id) {
            return newTodo;
          }

          return todo;
        })
      );
    }
    setShowAddModal(false);
    setTodoToUpdate(null);
  };

  //delete a single todo list
  const handleDeleteTodo = (todoId) => {
    const remainingTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(remainingTodo);
    toast.success("Delete todo Successfully");
  };

  //edit todo
  const handleEditTodo = (todo) => {
    setTodoToUpdate(todo);
    setShowAddModal(true);
  };

  //wishlist
  const handleWishList = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isFavorite: !todo.isFavorite,
          };
        } else {
          return todo;
        }
      })
    );
  };
  //status
  const handleStatus = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            status: !todo.status,
          };
        } else {
          return todo;
        }
      })
    );
  };
  // close modal
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTodoToUpdate(null);
  };

  return (
    <div className="pb-10 min-h-full">
      {/* modal show  */}
      {showAddModal && (
        <AddTodoModal
          onSave={handleAddEditTodo}
          onCloseClick={handleCloseClick}
          todoToUpdate={todoToUpdate}
        />
      )}
      <h1 className="text-center text-3xl md:text-5xl font-mono font-bold  text-yellow-500 px-8 rounded-2xl py-1">
        Add Your Todo`s
      </h1>
      <div className="w-[90%] mx-auto mt-10  bg-slate-100 px-4 py-4 md:mb-10 rounded-3xl">
        {/* todo action button add single todo and delete aLL then todo through this button */}
        <TodoActions
          storeTodo={storeTodo}
          onAddClick={() => setShowAddModal(true)}
        />

        {/* todo items  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 mb-10 md:my-10 mx-2 md:mx-10">
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onEdit={handleEditTodo}
              statusBar={handleStatus}
              wishList={handleWishList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
