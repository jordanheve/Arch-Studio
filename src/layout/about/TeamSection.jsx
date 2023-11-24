import useDeviceType from "../../hooks/useDeviceType";
export default function TeamSection() {
  const windowSize = useDeviceType();
  return (
    <section className="flex relative items-end">
        <img
          className="brightness-75 w-fit h-[720px] flex-grow-1 "
          src={`/about/${windowSize}/image-hero.jpg`}
          alt="someone using a laptop"
        />
      <div className="relative">
        <div className="absolute bg-white bottom-0 right-0 h-[501px] w-44"></div>
      </div>
      <h2 className="absolute top-10 right-0 text-[15.5rem] font-semibold text-slate-200">About</h2>
      <div className="max-w-md">
      <div className="border border-slate-200 w-20"></div>
        <h3 className=" text-7xl my-10 font-bold">Your team of professionals</h3>
        <p className="text-lg text-slate-600" >
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
}
