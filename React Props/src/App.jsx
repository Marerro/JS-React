import Header from "./components/Header";
import Avatar from "./assets/picture.jpg";

function App() {

  const userCard = [
    { username: "Ambre Dubois",
      tag: "adubois",
      location: "Valensole, France",
      avatar: Avatar,
      stats: {
        followers: 5603,
        views: 4827,
        likes: 1308}
      }
  ]

  return (
    <>
    <Header
    username={userCard[0].username}
    tag={userCard[0].tag}
    location={userCard[0].location}
    avatar={userCard[0].avatar}
    stats={userCard[0].stats.followers}
    views={userCard[0].stats.views}
    likes={userCard[0].stats.likes}
    />
    </>
  );
}
export default App;
