import React from "react";
import wormhole from "../../assets/wormhole.mp4";
import galaxy from "../../assets/galaxy.mp4";
import earth from "../../assets/earth.mp4";

import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";
import d4 from "../../assets/d4.png";
import d5 from "../../assets/d5.png";
import we from "../../assets/we.png";
import ScienceCard from "../../components/ScienceCard/ScienceCard";
const News = () => {
  return (
    <div>
      <div className="pt-[70px]">
        <div className="container1">
          <div className="flex justify-center gap-[30px]">
            <div className=" ">
              <video
                className="rounded-[10px]"
                autoPlay
                muted
                src={earth}
              ></video>
            </div>

            <div className="w-[62%] mt-[-5px]">
              <video
                className="rounded-[10px] h-[250px] "
                autoPlay
                muted
                src={galaxy}
              ></video>
              <video
                className="rounded-[10px] h-[300px]"
                autoPlay
                muted
                src={wormhole}
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="container1">
          <div>
            <h1 className="text-[#212121] font-[500] text-[32px] text-center">
              LATEST SCIENCE NEWS
            </h1>
            <div className="flex items-center justify-between">
              <div>
                <ScienceCard 
                img = {d1}
                text1="Mexican virologist Susana López Charretón uncovered rotaviruses’ secrets"
                text2="SUNDAY, 24 SEPTEMBER"
                />
                <ScienceCard 
                img = {d2}
                text1="Pathogen spillover driven by rapid changes in bat ecology"
                text2="THURSDAY, 05 OCTOBER"
                />
                <ScienceCard 
                img = {d3}
                text1="How a deadly fungus is so good at sticking to skin and other surfaces"
                text2="SUNDAY, 24 SEPTEMBER"
                />
              </div>
              <div>
                <ScienceCard 
                img = {d4}
                text1="Nanoparticles for coloring biomolecules and QLED displays - why the Nobel Prize in Chemistry was awarded (2023)"
                text2="THURSDAY, 05 OCTOBER"
                />
                <ScienceCard 
                img = {we}
                text1="How a deadly fungus is so good at sticking to skin and other surfaces"
                text2="THURSDAY, 05 OCTOBER"
                />
                <ScienceCard 
                img = {d5}
                text1="Nature Index 2023 annual tables: first ranking of medical sciences shows big U.S. lead"
                text2="THURSDAY, 05 OCTOBER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
