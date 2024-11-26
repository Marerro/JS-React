
const url = "http://localhost:3000/users"
const newUser = {
    firstname: "Useriuz321312",
    lastname: "Useriuz32",
    email: "user@gmail.com",
    country: 23,
    street: 1,
    city: "Vilnius",
    state: "Vilniaus apsk.",
    ZIP: "13212"
}

const fetchData = async () => {
    try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
    console.log(response);
    const data = await response.json()
    console.log(data);
    if(!response.ok){
        throw new Error("Error! Fetch doesn't connect to a server." + response.status)
    }
    }catch(error){
        console.log(error.message);
    }
}

fetchData();