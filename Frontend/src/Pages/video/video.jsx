import React, { useEffect, useState } from "react";
import "./video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Video() {
  // form handling for comment
  const [comment, setComment] = useState("");

  const [data, setData] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  async function fetchVideoById() {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`)
      .then((res) => {
        console.log(res.data.video);

        setData(res.data.video);

        setVideoUrl(res?.data?.video?.video);
      })
      .catch((err) => console.log(err));
  }

  async function getCommentByVideoId() {
    await axios
      .get(`http://localhost:4000/commentApi/comment/${id}`)
      .then((res) => {
        console.log(res);
        setComments(res.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, []);

  async function handleComment() {
    const body = {
      video: id,
      message: comment,
    };
    await axios
      .post(`http://localhost:4000/commentApi/comment/`, body, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        const newComment = res.data.comment;
        setComments([newComment, ...comments]);
        setComment("");
      })
      .catch((err) => {
        toast.error("Login to Comment");
      });
  }

  return (
    <div className="video">
      <div className="videopost-Section">
        <div className="video-youtube">
          {data && (
            <video width="400" controls autoPlay className="video-list">
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
            </video>
          )}
        </div>

        <div className="video-about">
          <div className="video-title">{data?.title}</div>
          <div className="videoProfile-block">
            <div className="videoProfile-leftSide">
              <Link
                to={`/user/${data?.user?._id}`}
                className="videoProfileI-leftImg"
              >
                <img
                  src={data?.user?.profilePic}
                  alt="profile"
                  className="videoProfile-Img"
                />
              </Link>

              <div className="videoSubview">
                <div className="videoUser-profileName">
                  {data?.user?.channelName}
                </div>
                <div className="videoPost-date">
                  {data?.user?.createdAt.slice(0, 10)}
                </div>
              </div>
              <div className="subscribe">Subscribe</div>
            </div>

            <div className="videoLike-block">
              <div className="videoLike">
                <ThumbUpOutlinedIcon />
                <div className="videoNumber-likes">{data?.like}</div>
              </div>
              <div className="videoLike-divider"></div>
              <div className="videoLike">
                <ThumbDownOutlinedIcon />
                <div className="videoNumber-likes"></div>
              </div>
            </div>
          </div>

          <div className="videoDescription-about">
            <div>{data?.createdAt.slice(0, 10)}</div>

            <div>{data?.description}</div>
          </div>

          <div className="videoComment-section">
            <div className="videoNumberofComments">
              {comments.length} Comments
            </div>

            <div className="selfComment">
              <img
                src={data?.user?.profilePic}
                alt=""
                className="selfCommentProfile"
              />
              <div className="addComment">
                <input
                  type="text"
                  className="addCommentInput"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <div className="cancelComment">
                  <div className="buttonComment">Cancel</div>
                  <div className="buttonComment" onClick={handleComment}>
                    Comment
                  </div>
                </div>
              </div>
            </div>

            <div className="othersComments">
              {comments.map((item, index) => {
                return (
                  <div className="selfComment" key={index}>
                    <img
                      src={item?.user?.profilePic}
                      alt=""
                      className="selfCommentProfile"
                    />
                    <div className="othersComment-section">
                      <div className="othersComment-header">
                        <div className="channelName">
                          {item?.user?.channelName}
                        </div>
                        <div className="commentTime">
                          {item?.createdAt.slice(0, 10)}
                        </div>
                      </div>
                      <div className="otherComment-read">{item?.message}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>

        <div className="videoSuggentionBlock">
          <div className="videoSuggestionThumbnail">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
              alt="Thumbnail"
              className="videoSuggestion-thumbnailImg"
            />
          </div>
          <div className="videoSuggestionAbout">
            <div className="videoSuggestion-aboutTitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
            <div className="videoSuggestion-aboutProfile">Cricket 320</div>
            <div className="videoSuggestion-aboutProfile">
              136k views . 1 day ago
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Video;
