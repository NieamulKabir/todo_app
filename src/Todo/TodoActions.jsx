/* eslint-disable react/prop-types */
const TodoActions = ({onAddClick}) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-semibold">TODO</h1>
      <div>
        <button onClick={onAddClick} className="btn bg-primary text-white hover:bg-primary">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
