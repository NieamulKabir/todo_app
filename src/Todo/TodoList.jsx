/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
const TodoList = ({ todo, onEdit,wishList }) => {
  return (
    <div className="card  bg-sky-100 text-black">
      <div className="card-body ">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{todo.title} </h2>
          <button onClick={()=>wishList(todo.id)}>
            {todo.isFavorite?(<FaHeart color="red"/>):(<FaHeart  color="black"/>)}
          </button>
        </div>
        <p>{todo.description}</p>
        <p className="font-semibold">Priority: {todo.priority}</p>
        <ul className="flex justify-start gap-1.5 flex-wrap">
          {todo.tags.map((tag, index) => (
            <li key={index}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-sky-300 px-2.5 text-sm capitalize text-[#222223]">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Delete</button>
          <button onClick={() => onEdit(todo)} className="btn btn-ghost">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
