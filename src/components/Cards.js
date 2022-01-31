import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards() {
  const commentsOne = [
    {
      user: "nero_kix",
      text: "LIT!!🔥",
      id: 1,
    },
    {
      user: "ducmanh_2k1",
      text: "Like!",
      id: 2,
    },
    {
      user: "PhuongAnhPham",
      text: "Love you bae",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mark_zucccc",
      text: "Amazing content!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "Lionel_Messi",
      text: "Love this!",
      id: 5,
    },
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="nero_kix"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="PhuongAnhPham"
        likedByNumber={89}
        hours={16}
      />
      <Card
        accountName="ducmanh_2k1"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="nero_kix"
        likedByNumber={47}
        hours={12}
      />
      <Card
        accountName="Lionel_Messi"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
    </div>
  );
}

export default Cards;