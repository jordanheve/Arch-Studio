import useDeviceType from "../../hooks/useDeviceType";
export default function TeamSection() {
  const windowSize = useDeviceType();
  return (
    <section className="mx-auto w-fit flex relative max-lg:flex-col items-center lg:items-end">
        <img
          className="brightness-75 w-fit flex-grow-1 "
          src={`/about/${windowSize}/image-hero.jpg`}
          alt="someone using a laptop"
        />
      
        <div className="sm:absolute max-sm:mt-[-45px] z-10 max-sm:mr-8 bg-white w-[343px] h-[45px] sm:bottom-0 right-0 sm:h-[431px] sm:w-[515px] lg:h-[501px]"></div>
      
      <h2 className=" z-20 max-sm:hi absolute top-40 lg:top-10 right-0 text-[12rem] lg:text-[15.5rem] font-semibold text-slate-200 max-sm:hidden">About</h2>
      <div className="z-30 max-w-md sm:absolute lg:relative bottom-0">
      <div className="border border-slate-200 w-20 "></div>
        <h3 className="text-5xl sm:text-7xl my-10 font-bold">Your team of professionals</h3>
        <p className="text-lg text-slate-600 max-sm:max-w-xs" >
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
}
