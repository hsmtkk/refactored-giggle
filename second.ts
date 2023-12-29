import axios from "axios"

async function getUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    await getUser();
})();
