import React from "react";
import { Fade } from "react-awesome-reveal";

export default function WelcomeSection() {
  return (
    <section className="w-full">
      <Fade>
        <div className="flex items-end  relative">
          <h1 className="text-slate-200 text-[13.5rem] font-bold top-[-9rem] absolute ">
            Welcome
          </h1>
          <div className="w-full grid place-content-center">
            <h2 className="text-black text-6xl font-bold max-w-sm mb-6">
              Welcome to Arch Studio
            </h2>
            <div className="max-w-md font-semibold text-slate-500 grid gap-6">
              <p>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </div>
          <img src="/home/desktop/image-welcome.jpg" alt="welcome image" />
        </div>
      </Fade>
    </section>
  );
}
