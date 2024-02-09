/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { MdIncompleteCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({ todos, onEdit, wishList, statusBar, onDelete }) => {
  // priority based color
  const priorityColor = (priority) => {
    if (priority === "High") {
      return "text-red-500 ";
    } else if (priority === "Medium") {
      return "text-green-500 ";
    } else if (priority === "Low") {
      return "text-gray-900 ";
    } else {
      return "";
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="card  bg-sky-100 text-black">
          <div className="card-body ">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-yellow-500">{todo.title} </h2>
              <button onClick={() => wishList(todo.id)}>
                {todo.isFavorite ? (
                  <FaHeart color="red" />
                ) : (
                  <FaHeart color="black" />
                )}
              </button>
            </div>
            <p>{todo.description}</p>
            <button onClick={() => statusBar(todo.id)} className="flex">
              Status :{" "}
              {todo.status ? (
                <p className="flex items-center text-green-600">
                  {" "}
                  <IoMdDoneAll />
                  Completed
                </p>
              ) : (
                <p className="flex items-center text-red-600">
                  {" "}
                  <MdIncompleteCircle />
                  Incomplete
                </p>
              )}
            </button>
            <p className={`font-semibold  ${priorityColor(todo.priority)}`}>
              {todo.priority}
            </p>
            <ul className="flex justify-start gap-1.5 flex-wrap">
              {todo.tags.map((tag, index) => (
                <li key={index}>
                  <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-sky-300 px-2.5 text-sm capitalize text-[#222223]">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="card-actions justify-end mt-4">
              <button
                onClick={() => onDelete(todo.id)}
                className="btn btn-primary"
              >
                <MdDelete className="text-xl " /> Delete
              </button>
              <button
                onClick={() => onEdit(todo)}
                className="btn btn-ghost bg-sky-300"
              >
                <FaEdit /> Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
