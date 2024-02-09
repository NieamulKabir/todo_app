
import QTEClogo from "./assets/logo.svg";


const Header = () => {


  // const todos = TodosData();
  // useEffect(() => {
  //   setTodosNumber(todos); // Log the todos data
  // }, [todos]);
  // console.log(todosNumber);
  // const completeTodos = todosNumber?.filter((todo) => todo.status === true);

  return (
    <nav className="py-6 md:py-2 fixed top-0 w-full !bg-sky-100 z-50 flex items-center">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <button>
          <img className="pl-3" src={QTEClogo} alt="qtec" />
        </button>
      </div>
     
    </nav>
  );
};

export default Header;
