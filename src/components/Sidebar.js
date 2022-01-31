import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Footer from "./Footer";
import image from "../images/profile.png";
import Suggestions from "./Suggestions";

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="hoangakashi"
          caption="Akashi Nguyen"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;