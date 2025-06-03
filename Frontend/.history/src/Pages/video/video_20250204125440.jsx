import React from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

function Video() {
  return (
    <div className="video">
      <div className="videopost-Section">
        <div className="video-youtube">
          <video width="400" controls autoPlay className="video-list">
            <source
              src="https://www.youtube.com/f212327e-83b7-47ba-9640-baba73be7959"
              type="video/mp4"
            />
            <source
              src="https://i.ytimg.com/vi/x9jUO8fwqeM/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDHWAQRZte5IztFwI96CY3pLjtrKA"
              type="video/webm"
            />
          </video>
        </div>

        <div className="video-about">
          <div className="video-title">{"JavaScript for Bignners"}</div>
          <div className="videoProfile-block">
            <div className="videoProfile-leftSide">
              <div className="videoProfileI-leftImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3N-JXZrh8nMyM-0uh68TbLYUBYqAM3EwQQ&s"
                  alt="profile"
                  className="videoProfile-Img"
                />
              </div>

              <div className="videoSubview">
                <div className="videoUser-profileName">{"User1"}</div>
                <div className="videoPost-date">{"2025-02-03"}</div>
              </div>
              <div className="subscribe">Subscribe</div>
            </div>

            <div className="videoLike-block">
              <div className="videoLike">
                <ThumbUpOutlinedIcon />
                <div className="videoNumber-likes">{32}</div>
              </div>
              <div className="videoLike-divider"></div>
              <div className="videoLike">
                <ThumbDownOutlinedIcon />
                <div className="videoNumber-likes"></div>
              </div>
            </div>
          </div>

          <div className="videoDescription-about">
            <div>2025-02-03</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              reiciendis delectus ad non quod eos? Perferendis obcaecati vel
              maxime ipsam? Repudiandae facere reprehenderit veniam suscipit
              animi mollitia accusantium ipsa id.
            </div>
          </div>

          <div className="videoComment-section">
            <div className="videoNumberofComments">2 Comments</div>

            <div className="selfComment">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
                alt=""
                className="selfCommentProfile"
              />
              <div className="addComment">
                <input
                  type="text"
                  className="addCommentInput"
                  placeholder="Add a comment"
                />
                <div className="cancelComment">
                  <div className="buttonComment">Cancel</div>
                  <div className="buttonComment">Comment</div>
                </div>
              </div>
            </div>

            <div className="othersComments">

              <div className="selfComment">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
                  alt=""
                  className="selfCommentProfile"
                />
                <div className="othersComment-section">
                  <div className="othersComment-header">
                    <div className="channelName">UserName</div>
                    <div className="commentTime">2025-02-03</div>
                  </div>
                  <div className="otherComment-read">
                    This is cool web project
                  </div>
                </div>
              </div>

              <div className="selfComment">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
                  alt=""
                  className="selfCommentProfile"
                />
                <div className="othersComment-section">
                  <div className="othersComment-header">
                    <div className="channelName">UserName</div>
                    <div className="commentTime">2025-02-03</div>
                  </div>
                  <div className="otherComment-read">
                    This is cool web project
                  </div>
                </div>
              </div>

              <div className="selfComment">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/1200px-IMG_Academy_Logo.svg.png"
                  alt=""
                  className="selfCommentProfile"
                />
                <div className="othersComment-section">
                  <div className="othersComment-header">
                    <div className="channelName">UserName</div>
                    <div className="commentTime">2025-02-03</div>
                  </div>
                  <div className="otherComment-read">
                    This is cool web project
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggentionBlock">
            <div className="videoSuggestionThumbnail">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg" alt="Thumbnail" className="videoSuggestion-thumbnailImg" />
            </div>
            <div className="videoSuggestionAbout">
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
