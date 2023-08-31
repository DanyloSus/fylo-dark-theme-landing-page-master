const Main = () => {
  return (
    <section className="max-w-[720px] mx-auto text-center text-white flex flex-col gap-10 items-center z-10 relative mt-20 lg:px-5 reveal">
      <img
        src="./illustration-intro.png"
        alt="illustration intro"
        className="lg:w-full"
      />
      <h1 className="">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="text-2xl lg:text-base">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="w-[280px] lg:w-[240px] h-14 lg:h-12">
        Get Started
      </button>
    </section>
  );
};

export default Main;
