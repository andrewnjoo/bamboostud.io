export const Jumbotron = () => {
  return (
    <div className="my-12 flex flex-col items-center bg-gray-200 py-12 text-center">
      <p className="text-3xl sm:text-5xl">Welcome to Bamboo Studio</p>
      <p>A creative space for innovative designs.</p>
      <a
        href="#contact"
        type="button"
        className="mt-4 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get in Touch
      </a>
    </div>
  );
};
