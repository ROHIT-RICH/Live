import React from "react";
import "./homePage.css";

function HomePage({sideNav}) {
  const options = [
    "All",
    "Twenty20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke-Studio",
    "Democracy",
    "Politics",
    "News",
    "Latest Release",
    "Trailers",
    "Serials",
    "Debates",
    "Coke-Studio",
    "Democracy",
    "Politics",
    "News",
  ];

  return (
    <div className={sideNav ? "homePage" : "homepage-full"}>
      <div className="homePage-options">
        {options.map((item, index) => {
          return <div className="homePage-optionList" key={index}>{item}</div>;
        })}
      </div>

      <div className="home-mainPage">
        div.youtube-vid
      </div>


    </div>
  );
}

export default HomePage;
