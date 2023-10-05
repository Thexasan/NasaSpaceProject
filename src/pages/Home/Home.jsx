import { Button } from "@mui/material";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="section1">
        <div className="container">
          <div className="left">
            <h1>
              Open project partners the opportunity to interact with scientists
              from all over the world
            </h1>
            <h1>
              Only with Open project partners you will finally have the
              opportunity to find scientists and projects according to your
              interests. With us everyone has the opportunity to share their
              project ideas that can be realized by collaborating with other
              scientists because now on our site you can communicate with each
              other being on different continents.
            </h1>
            <Button>MORE</Button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
