export default function HeritageSection() {
  return (
    <section className=" flex justify-center lg:items-end">
      <div className="lg:w-1/2 lg:pr-24">
        <div className="border border-slate-200 w-20"></div>

        <h3 className=" text-5xl sm:text-7xl my-10 font-bold">Our Heritage</h3>
        <div className="text-lg text-slate-600 grid gap-8 ">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      <img className="max-lg:hidden" src="/about/desktop/image-heritage.jpg" alt="heritage" />
    </section>
  );
}
