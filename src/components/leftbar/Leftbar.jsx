import "../leftbar/leftbar.css";
import {RssFeed,  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from "@material-ui/icons"

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon" />
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircleFilledOutlined className="leftbarIcon" />
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon" />
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon" />
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutline className="leftbarIcon" />
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkOutline className="leftbarIcon" />
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon" />
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <School className="leftbarIcon" />
                        <span className="leftbarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/2.png" alt="" />
                        <span className="leftbarFriendName">Spog</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/3.png" alt="" />
                        <span className="leftbarFriendName">Trillium</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/4.png" alt="" />
                        <span className="leftbarFriendName">Arrin</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/5.png" alt="" />
                        <span className="leftbarFriendName">Theron</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/6.png" alt="" />
                        <span className="leftbarFriendName">Raegar</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/7.png" alt="" />
                        <span className="leftbarFriendName">Litch</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/8.png" alt="" />
                        <span className="leftbarFriendName">Hector</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/9.png" alt="" />
                        <span className="leftbarFriendName">Anthony</span>
                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/profiles/10.png" alt="" />
                        <span className="leftbarFriendName">Corwin</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
