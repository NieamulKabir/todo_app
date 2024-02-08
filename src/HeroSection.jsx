import heroImg from "./assets/todo.svg";

const HeroSection = () => {
  return (
    <section className=" pt-20 md:pt-1 md:mt-[100px] mx-10 ">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img className="max-md:w-full" src={heroImg} alt="todo" />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              TODO
            </h1>
            <p className="text-lg my-2 opacity-60">
              To-do lists help you organize your work and keep track of tasks. A
              good digital to-do list makes it easier to get work done—and makes
              it harder to miss deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
