import { useState } from "react"
import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
    const [like, setLike] =useState(Post.like)
    const[isliked, setIsLiked] = useState(Post.isliked)

    const likeHandler =() => {
        setLike(isliked ? like -1 : like + 1)
        setIsLiked(!isliked)
    }

  return (
    <div className="post">
      <div className="postWraper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfImg" src="../assets/person/bosty.jpeg" alt="" />
                <span className="postUName">Neha Surati Randeriya</span>
                <span className="postDate">10 min ago</span>
            </div>
            <div className="postTopRight">
               <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! this is new Post.</span>
            <img className="postImg" src="./assets/post/meeting.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBtmLeft">
                <img className="likeBtn" src="./assets/like.png" onClick={likeHandler} alt="" />
                <img className="heartBtn" src="./assets/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">30 people like it</span>
            </div>
            <div className="postBtmRight">
                <span className="postComments">20 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
