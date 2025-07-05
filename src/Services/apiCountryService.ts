import type { AxiosInstance } from "axios";
import type { ICountry } from "../Interfaces/country.type";

const apiCountryService = (api:AxiosInstance)=>{

    const apiGetCountries = async () :Promise<ICountry[]|undefined>=>{
        try {
            const countries = await api.get<ICountry[]>("");
            return countries.data;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    return{
        apiGetCountries,
    }

}

export default apiCountryService;