import { NavLink, Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className=" max-md:py-20 max-md:bg-slate-200 mt-48 flex max-md:items-center left-0 w-full max-md:flex-col md:w-screen lg:w-full relative  md:absolute lg:relative">
      <div className="bg-black h-32 w-32 lg:h-48 lg:w-48 grid -top-16 place-items-center max-md:absolute">
        <NavLink
         title='Go to home page'
         to="/Arch-Studio">
          <svg xmlns="http://www.w3.org/2000/svg" width="97" height="40">
            <path
              fill="#FFF"
              d="M10.822 39.27l2.26-6.256h13.836l2.26 6.255H40L24.658 1.6h-9.316L0 39.268h10.822zM23.493 24.2h-6.986L20 15.252l3.493 8.95zm21.804 15.07V27.807c0-.776.22-1.499.662-2.169a5.14 5.14 0 011.746-1.632A4.51 4.51 0 0150 23.379c.64 0 1.343.13 2.112.388.769.259 1.434.601 1.998 1.028l3.972-7.991c-.654-.487-1.484-.883-2.488-1.188-1.005-.304-1.956-.456-2.854-.456-1.385 0-2.729.354-4.03 1.061-1.301.708-2.44 1.694-3.413 2.957V15.89h-9.498v23.38h9.498zm18.995.73c1.507 0 2.942-.21 4.304-.628 1.362-.418 2.439-.91 3.23-1.472l-3.105-6.393c-.289.198-.688.377-1.198.536-.51.16-1.07.24-1.678.24-.99 0-1.85-.217-2.58-.65a4.449 4.449 0 01-1.678-1.724 4.806 4.806 0 01-.582-2.33c0-.669.163-1.369.49-2.1.328-.73.845-1.347 1.553-1.849s1.625-.753 2.751-.753c1.187 0 2.161.258 2.922.776l3.105-6.393c-.76-.578-1.841-1.073-3.242-1.484a15.324 15.324 0 00-4.337-.616c-1.903 0-3.665.346-5.286 1.039-1.62.692-3.029 1.628-4.224 2.808a13.053 13.053 0 00-2.785 3.995 11.177 11.177 0 00-.993 4.6c0 1.69.354 3.285 1.062 4.784.707 1.5 1.678 2.82 2.91 3.961a13.79 13.79 0 004.258 2.683c1.606.647 3.307.97 5.103.97zm14.703-.73V26.392c0-.792.16-1.477.48-2.055a3.374 3.374 0 011.347-1.347c.578-.32 1.248-.48 2.01-.48 1.156 0 2.084.354 2.784 1.062.7.708 1.05 1.648 1.05 2.82v12.876h9.498V24.338c0-1.75-.41-3.314-1.232-4.692a9.088 9.088 0 00-3.345-3.276c-1.408-.807-3.003-1.21-4.783-1.21-1.4 0-2.782.255-4.144.765a12.064 12.064 0 00-3.665 2.157V0h-9.497v39.27h9.497z"
            />
          </svg>
        </NavLink>
      </div>
      <nav className="bg-slate-200 w-2/3 text-slate-500 font-semibold flex max-md:flex-col gap-10 items-center p-10 text-lg lg:h-48">
        <NavLink to="/Arch-Studio/portfolio">Portfolio</NavLink>
        <NavLink to="/Arch-Studio/about">About Us</NavLink>
        <NavLink to="/Arch-Studio/contact">Contact</NavLink>
      </nav>
      <Link
        to="/Arch-Studio/portfolio"
        className=" text-white md:absolute right-0 bottom-1/2 translate-y-1/2 bg-black hover:bg-zinc-800 active:bg-zinc-600 flex items-center justify-center py-4 px-8 gap-4 max-sm:w-full font-semibold text-lg"
      >
        See Our Portfolio
        <ArrowRightIcon  className="h-8" />
      </Link>
    </footer>
  );
}
