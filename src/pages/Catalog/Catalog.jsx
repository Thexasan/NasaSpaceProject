import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import MultiActionAreaCard from "../../components/CardCategory/Card";
import breket from "../../assets/breket.png";
import telefon from "../../assets/telefon.png";
import muravey from "../../assets/крист титул 2 (2).png";
import dnk from "../../assets/днк титул 1.png";
import { axiosRequest } from "../../utils/axiosRequest";

const Catalog = () => {
  const [direction, setDirection] = useState([]);
  const [project, setProjects] = useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const getDirection = async () => {
    try {
      const { data } = await axiosRequest.get("Direction/getdirections");
      setDirection(data.data);
    } catch (error) {}
  };
  const getProjects = async () => {
    try {
      const { data } = await axiosRequest.get(
        "ScienceProject/get-science-projects"
      );
      setProjects(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDirection();
    getProjects();
  }, []);
  return (
    <>
      <section className="container m-auto py-[80px] px-[50px]">
        <div className="flex items-start gap-[80px]">
          <div>
            <ul className="grid items-start grid-cols-1 gap-y-10">
              <h1 className="text-[#000000] text-[32px] font-[600] font-sans leading-10 ">
                Subjects
              </h1>
              {direction.map((e) => {
                return (
                  <li
                    key={e.id}
                    className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]"
                  >
                    <span className="text-[#000] font-sans text-[24px] font-[400]">
                      {e.name}
                    </span>

                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-[20px]">

            <div className="flex flex-col gap-[20px]">
              {project.map((e) => {
                return (
                  <div key={e.id}>
                    <MultiActionAreaCard
                      img={breket}
                      heading={
                        e?.name
                      }
                      id = {e?.id} 
                      fullnames={e?.fullName}
                      desc={
                        " In the process of biology research paper on the topic of bracket systems: indications for installation, types, features and care the author explained what braces are, who they are indicated for and what the principle of operation of different bracket systems."
                      }
                      subject = {e?.scientificDirectionName}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
