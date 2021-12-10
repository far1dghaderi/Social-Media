import { useState, useEffect } from "react";
import axios from "axios";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => {
        onlineUsers.includes(friend.id);
      })
    );
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnlien">
      {onlineFriends.map((online) => (
        <div
          className="chatOnlineFriend"
          onClick={() => {
            handleClick(online);
          }}
        >
          <div className="chatOnlineImgContainer">
            <img
              src={
                online?.profilePicture
                  ? publicFolder + online.profilePicture
                  : [publicFolder + "person/noAvatar.png"]
              }
              alt=""
              className="chatOnlineImg"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{online?.username}</span>
        </div>
      ))}
    </div>
  );
}
