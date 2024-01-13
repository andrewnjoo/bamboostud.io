/* eslint-disable @next/next/no-img-element */

export const Jumbotron = () => {
  return (
    <div className="flex flex-col items-center text-center my-12 py-12 bg-gray-200">
      <div className="w-full">
        <p className='text-3xl sm:text-5xl'>Welcome to Bamboo Studio</p>
        <p>A creative space for innovative designs.</p>
        <a
        href="#contact"
        type="button"
        className="mt-4 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get in Touch
      </a>
      </div>

      <div className="mt-4 container flex justify-center">
        <img
          src="/coders.jpg"
          className="rounded-xl max-w-[400px]"
          alt="Coders"
        />
      </div>
    </div>
  );
};
