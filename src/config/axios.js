import axios from "axios";

const axiosURL = axios.create({
    //baseURL: "https://api.blockpearl.finance/api/v1/"
    baseURL: "http://localhost:8000/api/v1/"
});

export {axiosURL};
