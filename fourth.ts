import axios from "axios"
import { HttpsProxyAgent } from 'https-proxy-agent'

async function getUser() {
    const agent = new HttpsProxyAgent('http://localhost:3128')
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', { httpsAgent: agent })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

(async () => {
    await getUser()
})();
