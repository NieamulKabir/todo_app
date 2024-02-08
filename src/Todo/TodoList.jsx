/* eslint-disable react/prop-types */

const TodoList = ({ todo }) => {
  return (
    <div className="card  bg-sky-100 text-black">
      <div className="card-body ">
        <h2 className="card-title">{todo.title}</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-ghost">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
