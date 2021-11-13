import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src="/assets/profiles/1.png" alt="" />
                            <span className="postUsername">Rosamund</span>
                            <span className="postDate">5 mins ago</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Hey! It's my first post too!</span>
                        <img className="postImg" src="assets/posts/1.jpg" alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/notes.png" alt="" />
                            <img className="likeIcon" src="assets/heart.png" alt="" />
                            <span className="postLikeCounter">32 people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">9 Comments</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src="/assets/profiles/19.png" alt="" />
                            <span className="postUsername">Tanaka</span>
                            <span className="postDate">15 mins ago</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Hey! It's my first post!</span>
                        <img className="postImg" src="assets/posts/2.jpg" alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/notes.png" alt="" />
                            <img className="likeIcon" src="assets/heart.png" alt="" />
                            <span className="postLikeCounter">28 people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">12 Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
