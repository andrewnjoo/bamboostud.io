import { headingClass } from "@/lib/style";
import { CheckeredPattern } from "@/app/components/graphics/CheckeredPattern";

export const Hero = () => {
  return (
    <div className="my-12 flex flex-col items-center bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-blue-500/25  py-12 text-center bg-opacity-25">
      <CheckeredPattern />
      <h2 className={headingClass}>Welcome to Bamboo Studio</h2>
      <p className='mt-8 text-xl'>A creative space for innovative designs.</p>
      <a
        href="#contact"
        type="button"
        className="mt-8 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get in Touch
      </a>
    </div>
  );
};
