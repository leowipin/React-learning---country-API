import axios from "axios";

const useApi = ()=>{

    const BASE_URL:string = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,area";

    const api = axios.create(
        {
            baseURL:BASE_URL,
        }
    );

    return api;
};

export default useApi;