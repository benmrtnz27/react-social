import "../feed/feed.css"
import Post from "../post/Post"
import { useEffect, useState } from 'react';
import Share from "../share/Share"
import axios from "axios";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = username 
                    ? await axios.get("/posts/profile/" + username)
                    : await axios.get("posts/timeline/6193694bc102b20b2e373580")
                setPosts(res.data)
            } catch(e) {
                console.error(e.response.data)
            }
        }
        fetchPosts();
    }, [username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}
