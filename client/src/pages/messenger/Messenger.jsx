import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu"></div>
        <div className="chatBox"></div>
        <div className="chatOnline"></div>
      </div>
    </>
  );
}
