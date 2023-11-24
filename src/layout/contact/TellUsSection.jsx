import useDeviceType from "../../hooks/useDeviceType";

export default function TellUsSection() {
  const windowSize = useDeviceType();
  return (
    <section className="flex relative items-end">
      <img
        className="brightness-75 flex-grow-1 "
        src={`/contact/${windowSize}/image-hero.jpg`}
        alt="someone using a laptop"
      />
      <div className="relative">
        <div className="absolute bg-white bottom-0 right-0 h-[501px] w-44"></div>
      </div>
      <h2 className="absolute top-10 right-0 text-[15.5rem] font-semibold text-slate-200">
        Contact
      </h2>
      <div className="max-w-md">
        <div className="border border-slate-200 w-20"></div>
        <h3 className=" text-7xl my-10 font-bold">
          Tell us about your project
        </h3>
        <p className="text-lg text-slate-600">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
    </section>
  );
}
