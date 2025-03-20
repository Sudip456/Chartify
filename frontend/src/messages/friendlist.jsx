import React, { useState, useEffect } from "react";
import useMessageStore from "../models/msgstore";
import { useNavigate, useParams } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./friendlist.css";

function Friendlist() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(false);
  const { id } = useParams();
  const {
    select_friend_id,
    fetchFriends,
    friends,
    select_friend_name,
    setSelectFriendName,
    setSelectFriendId,
  } = useMessageStore();
  useEffect(() => {
    fetchFriends(id);
  }, []);

  return (
    <div className="friend-list">
      <div id="logo-icon">
        <h2 id="friendlisth2">Chartify</h2>
        <span id="setting-icon" onClick={() => setSettings(!settings)}>
          <i className="ri-settings-5-line"></i>
        </span>
        <div className={settings === true ? "show-settings" : "hide-settings"}>
          <span
            className="setting-options"
            onClick={() => {
              navigate(`/editaccount/${id}`);
            }}
          >
            Edit Profile
          </span>
          <span
            className="setting-options"
            onClick={() => navigate("/privacypolicy")}
          >
            Privacy Policy
          </span>
          <span
            className="setting-options"
            id="logout-setting"
            onClick={() => navigate("/logout")}
          >
            Logout
          </span>
        </div>
      </div>
      {friends.map((friend) => (
        <div
          key={friend._id}
          className="friend-name"
          onClick={() => {
            setSelectFriendName(friend.fullname);
            setSelectFriendId(friend._id);
            navigate(`/messages/${id}/${friend._id}`);
          }}
        >
          <span className="photo-span"></span>
          <p>{friend.fullname}</p>
        </div>
      ))}
    </div>
  );
}

export default Friendlist;
