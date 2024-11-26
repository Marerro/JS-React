function User({ user }) {
  const { username, email, channel, likes, id } = user;

  return (
    <div className="shadow m-3">
      <h1>{username}</h1>
      <p>{email}</p>
      <p>User channel: {channel}</p>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default User;
