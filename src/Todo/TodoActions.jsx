/* eslint-disable react/prop-types */
const TodoActions = ({ onAddClick, storeTodo }) => {
  //completed todos filter
  const completeTodos = storeTodo?.filter((todo) => todo.status === true);

  return (
    <div className="md:flex justify-between items-center">
      <h1 className="font-semibold text-xl md:text-2xl">TODO</h1>
      <div className="md:flex justify-center items-center pb-4">
        <div className="py-3 font-semibold">
          <span className="bg-sky-200 mr-2 py-2 px-2 rounded-lg">
            {" "}
            Todos <div className="badge">+{storeTodo?.length}</div>
          </span>
          <span className="bg-sky-200 mr-2 py-2 px-2 rounded-lg">
            Complete Todos <div className="badge">+{completeTodos?.length}</div>
          </span>
        </div>

        <div className="">
          <button
            onClick={onAddClick}
            className="btn bg-primary text-white hover:bg-primary mb-3 text-lg"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoActions;
