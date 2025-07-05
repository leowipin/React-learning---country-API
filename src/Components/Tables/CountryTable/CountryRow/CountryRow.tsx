import { useEffect, useState } from "react";
import type { CountryRowProps } from "./countryRowProps";
import BasicButton from "../../../Buttons/BasicButton/BasicButton";
import type { ICountry, ICountryUpdate } from "../../../../Interfaces/country.type";

const CountryRow = ({country, onDelete, onUpdate}:CountryRowProps) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [countryEditRow, setCountryEditRow] = useState<ICountryUpdate|null>(null);

    const capital = (arrayCapital:string[]): string => {
        const capital = arrayCapital.join(", ");
        if(capital.length==0) return "N/A";
        return capital;
    };

    const capitalToArray = (capital:string): string[] => {
        return capital.split(",");
    };

    const currencies = (country:ICountry): string => {
        const currenciesCodes:string[] = Object.keys(country.currencies);
        let currenciesNames:string = "N/A";
        currenciesCodes.forEach((code)=>{
            if(currenciesNames==="N/A"){
                currenciesNames = country.currencies[code].name;
            } else{
                currenciesNames.concat(", ", country.currencies[code].name);
            }
        })
        return currenciesNames;
    }

    const handleStartEdit = (): void => {
        setIsEditing(true);
        const editCountryRow: ICountryUpdate = {
            commonName:country.name.common,
            capital:country.capital,
            population:country.population
        }
        setCountryEditRow(editCountryRow)
    }

    const handleCancelEdit = (): void => {
        setIsEditing(false);
        setCountryEditRow(null);
    }

    const handleSaveUpdate = (): void => {
        onUpdate(country.name.official, countryEditRow!);
        setIsEditing(false);
        setCountryEditRow(null);
    }

    const density = (population:number, area:number) :number => {
        return population/area;
    }

    // useEffect(()=>{
    //     setCountryRow(country);
    // }, [country]);

    useEffect(()=>{
        console.log("SE RENDERIZA ROW")
    })

    return(
        <tr>
            { isEditing? <td><input type="text" value={countryEditRow!.commonName} onChange={(e)=>{
                setCountryEditRow(prev=>({...prev!, commonName:e.target.value}));
            }}/></td>:
              <td>{country.name.common}</td> }
            { isEditing? <td><input type="text" value={capital(countryEditRow!.capital)} onChange={(e)=>{
                setCountryEditRow(prev=>({...prev!, capital:capitalToArray(e.target.value)}));
            }}/></td>:
              <td>{capital(country.capital)}</td> }
            <td>{currencies(country)}</td>
            { isEditing? <td><input type="number" value={countryEditRow!.population} onChange={(e)=>{
                setCountryEditRow(prev => ({...prev!, population:e.target.valueAsNumber}));
            }}/></td>:
              <td>{country.population}</td> }
            <td>{density(country.population, country.area)}</td>
            { isEditing? 
                <td>
                    <BasicButton onClick={handleSaveUpdate}>Guardar</BasicButton>
                    <BasicButton onClick={handleCancelEdit}>Cancelar</BasicButton>
                </td>:
                <td><BasicButton onClick={handleStartEdit}>Editar</BasicButton></td>
            }
            <td><BasicButton onClick={()=>{onDelete(country.name.official)}}>Eliminar</BasicButton></td>
            
        </tr>
    )

}

export default CountryRow;