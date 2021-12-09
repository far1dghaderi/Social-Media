import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
  console.log(own);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="" alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
