/* eslint-disable react/prop-types */
import  { useState } from 'react';

const AddTodoModal = ({ onSave, onCloseClick }) => {
    const [todo, setTodo] = useState( {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          tags: [],
          priority: "",
          isFavorite: false,
        }
      );
      const handleChange = (evt) => {
        const name = evt.target.name;
        let value = evt.target.value;
        if (name === "tags") {
          value = value.split(",");
        }
        setTodo({
          ...todo,
          [name]: value,
        });
      }
    return (
        <>
        <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
        <form className="mx-auto my-10 max-w-[500px] rounded-xl border  bg-[#191D26] p-9  lg:my-20 lg:p-11 z-10 absolute top-1/4 left-12 md:left-1/3">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
           Add Todo {/* {isAdd ? "Add New todo" : "Edit todo"} */}
          </h2>
  
          <div className="space-y-6 text-white lg:space-y-5">
            <div className="space-y-1 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2"
                type="text"
                name="title"
                id="title"
                value={todo.title}
                onChange={handleChange}
                required
              />
            </div>
  
            <div className="space-y-2 lg:space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={todo.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
  
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  value={todo.tags}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={todo.priority}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
  
          <div className="mt-16 flex justify-between lg:mt-20">
            <button
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={onCloseClick}
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={() => onSave(todo)}
            >
              Save
            </button>
          </div>
        </form>
      </>
    );
};

export default AddTodoModal;