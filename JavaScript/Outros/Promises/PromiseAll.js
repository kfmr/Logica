//import fetch from 'node-fetch';
import axios from 'axios'

async function getGitUsers(users) {
    try {
        const getInfo = users.map(user => axios.get(`https://api.github.com/users/${user}`));
        const user = await Promise.all(getInfo);
        const data = user.map(log => log.data)
        return data
    } catch (error) {
        return error.response.status
    }
}

//console.log(await getGitUsers(['']))