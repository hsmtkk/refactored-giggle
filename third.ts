import axios from "axios"

async function getUser() {
    try {
        const response = await axios.get('http://neverssl.com', { proxy: { protocol: "http", host: "localhost", port: 3128 } });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    await getUser();
})();
