import axios from "axios";

async function GetAllCards() {

    const serverURL = "http://localhost:3000/allcards";

    try {
        const response = await axios.get(serverURL);
        return (response.data)
    } catch (error) {
        console.error(error.message);
    }
}

export default GetAllCards;