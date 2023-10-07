import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import MultiActionAreaCard from "../../components/CardCategory/Card";
import breket from "../../assets/breket.png";
import telefon from "../../assets/telefon.png";
import muravey from "../../assets/крист титул 2 (2).png";
import dnk from "../../assets/днк титул 1.png";

const Catalog = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Mathematics
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Physics
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Chemistry
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Biology
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Astronomy
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Geology
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Informatics
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Robotics
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  History
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Sociology
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Ecology
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Geography
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Savings
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>{" "}
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Architecture
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>
              <li className="flex justify-between border-b-2 border-solid border-[#0072CD] items-center gap-[35px]">
                <span className="text-[#000] font-sans text-[24px] font-[400]">
                  Art
                </span>

                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-[20px]">
            <h1 className="font-sans text-[36px] font-[500] leading-[44px] text-[#000000DE/87%] text-center">
              Biology
            </h1>

            <div className="flex flex-col gap-[20px]">
              <MultiActionAreaCard
                img={breket}
                heading={
                  "Bracket systems: indications for installation, types, features and care"
                }
                fullnames={"Diana Khomutova"}
                desc={
                  " In the process of biology research paper on the topic of bracket systems: indications for installation, types, features and care the author explained what braces are, who they are indicated for and what the principle of operation of different bracket systems."
                }
              />
              <MultiActionAreaCard
                img={muravey}
                heading={
                  "Study of the adaptation process of an ant colony to an artificial habitat"
                }
                fullnames={"Stanislav Semyon Timofeyevich"}
                desc={
                  'While working on a biology research project titled "Study of the process of adaptation of an ant colony to an artificial habitat", an 11th grade student conducted observations of ant colonies under the influence of external factors to study the process of adaptation of ants to an artificial habitat.'
                }
              />
              <MultiActionAreaCard
                img={telefon}
                heading={"Cell phone microbiological contamination"}
                fullnames={"Arseny Travkin"}
                desc={
                  'In the process of conducting work on a research project in biology on the topic "Microbiological contamination of cell phones", a student of the 9th grade found and studied information about the extent of microbes on the...'
                }
              />
              <MultiActionAreaCard
                img={dnk}
                heading={"What is a genome, DNA, and a DNA test?"}
                fullnames={"Andreeva Arina Nikolaevna"}
                desc={
                  'While working on a biology research project on "What is a genome, DNA and DNA test?" a 9th grade student expanded her knowledge of the composition of a gene and DNA, what it is for, and took the test and shared the result.'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
