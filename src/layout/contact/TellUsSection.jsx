import useDeviceType from "../../hooks/useDeviceType";

export default function TellUsSection() {
  const windowSize = useDeviceType();
  return (
    <section className="mx-auto w-fit flex relative max-lg:flex-col items-center lg:items-end">
      <img
        className="brightness-75 flex-grow-1 "
        src={`/Arch-Studio/contact/${windowSize}/image-hero.jpg`}
        alt="someone using a laptop"
      />
        <div className="sm:absolute max-sm:mt-[-45px] z-10 max-sm:mr-8 bg-white w-[343px] h-[45px] sm:bottom-0 right-0 sm:h-[431px] sm:w-[515px] lg:h-[501px]"></div>
      <h2 className="z-20 max-sm:hi absolute top-40 lg:top-10 right-0 text-[10rem] lg:text-[15.5rem] font-semibold text-slate-200 max-sm:hidden">
        Contact
      </h2>
      <div className="z-30 max-w-md sm:absolute lg:relative bottom-0">
        <div className="border border-slate-200 w-20"></div>
        <h3 className="text-5xl sm:text-7xl my-10 font-bold max-sm:max-w-xs">
          Tell us about your project
        </h3>
        <p className="text-lg text-slate-600 max-sm:max-w-xs">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
    </section>
  );
}
