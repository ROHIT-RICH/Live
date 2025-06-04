import React, { useEffect, useState } from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import axios from "axios";


function HomePage({ sideNav }) {
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

  const [data, setData] = useState([]); //for handling fetched data
  

  // useEffect for fetching from backend
  useEffect(() => {
    axios.get(`https://live-lp4l.onrender.com/api/allVideos`).then(res => {
      console.log(res.data.videos)
      setData(res.data.videos)
    }).catch(err => console.log(err));
  }, []);

  return (
    <div className={sideNav ? "homePage" : "homepage-full"}>
      <div className="homePage-options">
        {options.map((item, index) => {
          return (
            <div className="homePage-optionList" key={index}>
              {item}
            </div>
          );
        })}
      </div>

      <div className={sideNav ? "home-mainPage" : "home-mainPagefull"}>

        {
          data?.map((item, index) => {
            return (
              <Link to={`/watch/${item._id}`} key={index} className="youtube-video">
                <div className="youtube-thumbnailBox">
                  <img
                    src={item.thumbnail}
                    alt="thumbnail"
                    className="youtube-thumbnailPic"
                  />
                  <div className="youtbe-timmingThumbnail">28:01</div>
                </div>

                <div className="youtube-titleBox">
                  <div className="youtube-titleBox-profile">
                    <img
                      src={item?.user?.profilePic}
                      alt="profile"
                      className="youtube-thumbnail-profile"
                    />
                  </div>

                  <div className="youtube-titleBox-title">
                    <div className="youtube-videoTitle">{item?.title}</div>
                    <div className="youtube-channelName">{item?.user?.channelName}</div>
                    <div className="youtubeVideos-views">{item?.like}</div>
                  </div>
                </div>

              </Link>
            )
          })
        }






      </div>
    </div>
  );
}

export default HomePage;
