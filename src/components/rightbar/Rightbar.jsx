import "../rightbar/rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="audioContainer">
                    <img className="audioImg" src="assets/audio.png" alt="" />
                    <span className="audioText"><b>Trillium</b> and <b>3 other friends</b> are listening to music</span>
                </div>
                <img className="rightbarAd" src="assets/ad.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/profiles/3.png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Trillium</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/profiles/10.png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Corwin</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/profiles/8.png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Hector</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/profiles/7.png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Litch</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
