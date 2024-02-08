/* eslint-disable react/prop-types */
const TodoActions = ({onAddClick}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-2xl">TODO</h1>
      <div>
        <button onClick={onAddClick} className="btn bg-primary text-white hover:bg-primary mb-3 text-lg">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
