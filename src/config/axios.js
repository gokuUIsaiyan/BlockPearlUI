import axios from "axios";

const axiosURL = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
});

export {axiosURL};
