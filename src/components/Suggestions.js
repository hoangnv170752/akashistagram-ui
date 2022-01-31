import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For Dudes</div>
        <a href="/">See All</a>
      </div>

      <Profile
        caption="Followed by nero_kix + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by nero_kix + 1 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Follows you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by nero_kix + 7 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by nero_kix + 4 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;