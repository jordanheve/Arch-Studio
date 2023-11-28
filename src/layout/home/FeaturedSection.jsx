import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useDeviceType from "../../hooks/useDeviceType";
export default function FeaturedSection() {
  const windowSize = useDeviceType();
  const subtitleClass = "font-bold text-3xl";
  const viewAllClass = "text-slate-100";
  const numberClass = "absolute top-0 right-0 opacity-50  text-white text-[14rem] font-semibold tracking-[-1rem] max-lg:hidden";
  const textClass = "absolute bottom-8  left-8 text-white ";
  const imgClass = "brightness-[.7]";
  return (
      <section className="">
        <div className="flex justify-center lg:justify-between  mb-12">
          <h3 className="text-black text-6xl font-bold">Featured</h3>
          <Link className="bg-black hover:bg-zinc-800 active:bg-zinc-600 flex items-center py-4 px-6 gap-4 font-semibold w-fit text-white max-lg:hidden" to="/Arch-Studio/portfolio">
            See All
            <ArrowRightIcon className="h-8" />
          </Link>
        </div>
        <div className="flex max-lg:flex-col gap-6 items-center">
          <div className="relative">
            <img
              className={imgClass}
              src={`/Arch-Studio/portfolio/${windowSize}/image-del-sol.jpg`}
              alt="image project del sol"
            />

            <span className={numberClass}>1</span>
            <div className={textClass}>
              <h4 className={subtitleClass}>Project Del Sol</h4>
              <Link to="/Arch-Studio/portfolio" className={viewAllClass}>
                View All Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className={imgClass}
              src={`/Arch-Studio/portfolio/${windowSize}/image-228b.jpg`}
              alt="image 228b tower"
            />
            <span className={numberClass}>2</span>
            <div className={textClass}>
              <h4 className={subtitleClass}>228B Tower</h4>
              <Link to="/Arch-Studio/portfolio" className={viewAllClass}>
                View All Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className={imgClass}
              src={`/Arch-Studio/portfolio/${windowSize}/image-prototype.jpg`}
              alt="image le prototype"
            />
            <span className={numberClass}>3</span>
            <div className={textClass}>
              <h4 className={subtitleClass}>Le Prototype</h4>
              <Link to="/Arch-Studio/portfolio" className={viewAllClass}>
                View All Projects
              </Link>
            </div>
          </div>
          <Link className="lg:hidden hover:bg-zinc-800 active:bg-zinc-600 bg-black flex items-center justify-center py-4 px-6 gap-4 font-semibold w-full max-w-[311px] sm:max-w-[573px] text-white" to="/Arch-Studio/portfolio">
            See All
            <ArrowRightIcon className="h-8" />
          </Link>
        </div>
        
      </section>
  );
}
