import type { ICountry, ICountryUpdate } from "../../../Interfaces/country.type";

export interface CountryTableProps{
    countries:ICountry[]|undefined;
    onDelete: (offName:string)=> void;
    onUpdate: (offName:string, updates:ICountryUpdate)=> void;
}