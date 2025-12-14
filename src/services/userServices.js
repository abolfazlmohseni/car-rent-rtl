import axios from "axios"

const BASE_URL = "http://localhost:3000"


export const getuser = async (userid) => {
    try {
        const response = await axios.get(`${BASE_URL}/users?id=${userid}`)
        return response.data
    } catch (error) {
        console.error(`Error fetching user ${userid}:`, error)
        throw error
    }
}