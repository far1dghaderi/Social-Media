import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="" alt="" className="messageImg" />
        <p className="messageText"></p>
      </div>
      <div className="messageBottom"></div>
    </div>
  );
}
