import React from 'react';
import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Createpost } from "../images/create.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.png";

function Menu() {
  return (<div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <Createpost className="icon" />
      <ProfileIcon iconSize="small" image={image} />
  </div>);
}

export default Menu;
