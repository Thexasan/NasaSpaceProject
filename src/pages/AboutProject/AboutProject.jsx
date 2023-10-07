import React, { useEffect } from 'react'
import crystal from '../../assets/cristall.png'
import smile from '../../assets/smile.png'
import ProjectCard2 from '../../components/ProjectCard/ProjectCard2';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <div className="section1 pb-[50px] pt-[70px]">
          <div className="container1 flex px-[50px] justify-between">
            <ProjectCard2
                img={crystal}
                wAuthor="Anna Barinova"
                subject="Physics"
                desc="
                While working on a physics research project on the topic «Growing Crystals,» an 11th grade student expanded her knowledge of how to grow single crystals and druses, considered the use of crystals in science and technology, and grew...
                "
            />
          </div>
          <div className="container1 flex px-[50px] justify-between mt-[20px]">
            <div className="max-w-[500px] text-[20px]">
              <h1 className='text-[24px] font-bold'>Table of contents</h1>
              <ol className='leading-[40px]'>
                <li>1 General information about ants</li>
                <li>1.2 Myrmecology and the history of its emergence</li>
                <li>1.3 Myrmikiperism</li>
                <li>1.4 Relevance of the work</li>
                <li>2.1 Conditions required for ant reproduction</li>
                <li>2.2 General information about formicariae</li>
                <li>2.3 Ant species used in the work</li>
              </ol>
            </div>
            <div className="max-w-[500px] h-[330px] overflow-hidden">
                <img src={smile} className='h-[330px] object-cover' alt="" />
            </div>
          </div>
        </div>
        <div className="section2 px-[50px]  pb-[70px]">
          {/* title */}
          <div className="container1 text-center">
            <Button
            sx={{ paddingY: "6px", paddingX: "16px" }}
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            >
             DISCUSS
            </Button>
            <h1 className='text-[38px] font-bold mt-[80px]'>Study of the adaptation process of an ant colony to an artificial habitat</h1>
          </div>
          {/* about */}
          <div className="container1 text-[20px] pt-[120px]">
            <h1 className='font-bold mb-[40px]'>1 General information about ants</h1>
            <p className=''>(Formicoidea) is a family of stinging webworms. Social insects; form complex families consisting 
            of castes: females, males, warriors and workers. Females and males are winged, workers are wingless. The wings have 
            reduced veining. An ant family has one or more reproductive females, depending on the species and size of the family 
            - called queens or mates. Females resemble workers, but differ from them in the structure of the thorax and are usually 
            larger in size. They have wings, which they bite off after fertilization [1, 2].</p>
            <br />
            <p>Many ants have a sting and poison glands; their excretions include formic acid. The length of wingless "worker" ants is from 0.8 to 30 millimeters,
            females are larger. There are about 14,000 species. Ants evolved from wasp-like ancestors in the middle of the Cretaceous period 
            between 110 and 130 million years ago. Widespread except in Antarctica and the far north; especially abundant in the tropics. 
            The advantages afforded to ants by cooperation have led to their current status as the dominant arthropod group in terms of numbers [1, 2].</p>
            <br />
            <p>Ants live in families in nests called anthills, which they build in soil, wood, and under rocks; some build anthills from 
            small plant particles. Ants feed mainly on the sap of plants, the fall of aphids and other sucking insects, in the period of feeding larvae - mainly insects. 
            There are also species that feed on seeds and cultivated fungi.
            Ants, as representatives of insects with a complete transformation, in their development pass several stages: egg, larva, pupa and imago. From the egg hatches the
            larva, the only growing stage of the insect.</p>
            <br />
            <p>If the egg is fertilized, it will produce a female, and if not, it will produce a male. Eggs are usually not stored individually, but in small "packets". After the 
            incubation period, a sedentary worm-like larva emerges from the egg and is fed and cared for by the workers. The outer coverings of the larva can only stretch to certain 
            limits, and molts occur in the course of growth. Accordingly, four or five instars of larvae are distinguished.</p>
          </div>
          <div className="container1 text-[20px] pt-[120px]">
            <h1 className='font-bold mb-[40px]'>1.2 Myrmecology and the history of its emergence</h1>
            <p className=''>Myrmecology (from the Greek μύρμηξ "ant" + λόγος "doctrine") is the science that studies ants. An independent section of zoology [1, 2, 3].
            Carl Emery is one of the creators and "forefathers" of the science of ants, the largest myrmecologist of the late XIX - early XX centuries. Carl Emery made an outstanding contribution to the study of the fauna and systematics of ants in almost all corners of the globe, North and South America, Africa, Asia and Europe, Australia. Emery was one of the first to describe in detail the myrmecofauna of Indo-Malaysia and Australia.
            He studied the myrmecofauna of tropical America. Emery made the first detailed systematization of all knowledge in the taxonomy, faunistics and systematics of ants. He created several "ant" volumes in the seminal monographic series "Genera Insectorum. Hymenoptera. Fam. Formicidae."
            American entomologist and ethologist William Morton Wheeler is the "forefather" and founder of modern American myrmecology.</p>
            <br />
            <div className="flex justify-center items-start text-start mt-[80px]">
                <div className="max-w-[700px] min-h-[400px] overflow-hidden">
                  <p>Fig. Preservation of colony activity</p>
                  <img src={smile} className='h-[400px] object-cover' alt="" />
              </div>
            </div>
          </div>
          <div className="container1 text-[20px] pt-[120px]">
            <h1 className='font-bold mb-[40px]'>1.2 Myrmecology and the history of its emergence</h1>
            <p className=''>Myrmecology (from the Greek μύρμηξ "ant" + λόγος "doctrine") is the science that studies ants. An independent section of zoology [1, 2, 3].
            Carl Emery is one of the creators and "forefathers" of the science of ants, the largest myrmecologist of the late XIX - early XX centuries. Carl Emery made an outstanding contribution to the study of the fauna and systematics of ants in almost all corners of the globe, North and South America, Africa, Asia and Europe, Australia. Emery was one of the first to describe in detail the myrmecofauna of Indo-Malaysia and Australia.
            He studied the myrmecofauna of tropical America. Emery made the first detailed systematization of all knowledge in the taxonomy, faunistics and systematics of ants. He created several "ant" volumes in the seminal monographic series "Genera Insectorum. Hymenoptera. Fam. Formicidae."
            American entomologist and ethologist William Morton Wheeler is the "forefather" and founder of modern American myrmecology.</p>
            <br />
            <div className="flex justify-center items-start text-start mt-[80px]">
                <div className="max-w-[700px] min-h-[400px] overflow-hidden">
                  <p>Fig. Preservation of colony activity</p>
                  <img src={crystal} className='h-[400px] object-cover' alt="" />
              </div>
            </div>
          </div>
          {/* заключение */}
          <div className="container1 text-[20px] pt-[120px]">
            <h1 className='font-bold mb-[40px] text-center'>Заключение</h1>
            <p className=''>Analysis of the studied literature and my own results of my research on the topic under 
            study allowed me to conclude that ants can be grown at home, creating optimal conditions for them. </p>
            <br />
            <p className=''>In this case, the experience of creating formicariums, studying the behavior of different species of 
            ants in an artificial habitat can be used to create a miniature living corner at school.</p>
            <br />
            <p>The anthill is an advanced community, which clearly traces complex relationships: in behavior, communication, mutual aid.
            And we, human society, have a lot to learn from these amazing, hardy, industrious insects.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutProject