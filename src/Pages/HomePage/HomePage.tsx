import type { AxiosInstance } from "axios";
import useApi from "../../Hooks/useApi";
import apiCountryService from "../../Services/apiCountryService";
import { useEffect, useState } from "react";
import type { ICountry, ICountryUpdate } from "../../Interfaces/country.type";
import CountryTable from "../../Components/Tables/CountryTable/CountryTable";

const HomePage = () => {

    console.log("RENDERIZANDO HOME PAGE");

    const api:AxiosInstance = useApi(); 
    const {apiGetCountries} = apiCountryService(api); 
    const [countries, setCountries] = useState<ICountry[]|undefined>([]);
    
    const getCountries = async (): Promise<void>=>{
        const countries:ICountry[]|undefined = await apiGetCountries();
        console.log("COUNTRIES OBTENIDAS:",countries?.length)
        setCountries(countries);
        console.log("SE SETEA EL ESTADO COUNTRIES, EMPIEZA SEGUNDO RENDERIZADO");        
    };

    const handleDeleteCountry = (offName:string) :void => {
        const updatedCountries = countries?.filter((c)=>{
            return c.name.official !== offName;
        });
        setCountries(updatedCountries);
    }

    const handleUpdateCountry = (offName:string, countryUpdate:ICountryUpdate): void => {
        const updatedCountries = countries?.map((c)=>{
            if(offName===c.name.official){
                c.name.common = countryUpdate.commonName;
                c.capital = countryUpdate.capital;
                c.population = countryUpdate.population;
            }
            return c;
        });
        setCountries(updatedCountries);  
    }

    useEffect(()=>{
        console.log("HOME PAGE RENDERIZADA Y MONTADA")
        getCountries();
        console.log("HOME PAGE RENDERIZADA Y MONTADA OBTENIENDO COUNTRIES (GET)")
    }, []);

    useEffect(()=>{
        console.log("HOME PAGE RENDERIZADA POR CAMBIO DE ESTADO DE COUNTRIES: ",countries?.length);
    },[countries]);

    return(
        <div>
            <h1>Paises del mundo</h1>
            <CountryTable 
                countries={countries} 
                onDelete={handleDeleteCountry}
                onUpdate={handleUpdateCountry}
            >
            </CountryTable>
        </div>
    )

}
export default HomePage;