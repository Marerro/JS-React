const url = "http://localhost:3781/users";

const newUser = {
  username: "UserTEST",
  email: "user1@gmail.com",
  channel: "UserchannelTEST",
  likes: 23,
};

const fetchData = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("Klaida! 🤨 " + response.statusText);
    }
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();
