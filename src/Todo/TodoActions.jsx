/* eslint-disable react/prop-types */
import { IoMdAddCircle } from "react-icons/io";

const TodoActions = ({ onAddClick, storeTodo }) => {
  //completed todos filter
  const completeTodos = storeTodo?.filter((todo) => todo.status === true);

  return (
    <div className="md:flex justify-between items-center pt-6 md:px-4 ">
      <h1 className="font-semibold text-xl md:text-2xl mr-3">TODO</h1>
      <div className="md:flex justify-center items-center pb-4">
        <div className="py-3 font-semibold flex">
          <p className="bg-sky-200 mr-2 py-2 px-2 rounded-lg flex ">
            {" "}
            Todos <div className="badge">+{storeTodo?.length}</div>
          </p>
          <p className="bg-sky-200 mr-2 py-2 px-2 rounded-lg flex">
            Complete Todos<div className="badge">+{completeTodos?.length}</div>
          </p>
        </div>

        <div className="flex">
          <button
            onClick={onAddClick}
            className="btn bg-primary text-white hover:bg-primary mb-3"
          >
            <IoMdAddCircle /> Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoActions;
