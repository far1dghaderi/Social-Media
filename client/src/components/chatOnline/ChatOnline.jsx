import "./chatOnline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src="" alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
      </div>
      <span className="chatOnlineName"></span>
    </div>
  );
}
