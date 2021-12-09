import "./convesations.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((member) => {
      return member !== currentUser._id;
    });
    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversation">
      <img
        src={
          user.profilePicture
            ? user.profilePicture
            : publicFolder + "/person/noAvatar.png"
        }
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user.username}</span>
    </div>
  );
}
