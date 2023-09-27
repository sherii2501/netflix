import axios from "axios";

const tmtbAxiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default tmtbAxiosInstance