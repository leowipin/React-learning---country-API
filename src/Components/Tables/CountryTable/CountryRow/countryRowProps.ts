import type { ICountry, ICountryUpdate } from "../../../../Interfaces/country.type";

export interface CountryRowProps{
    country: ICountry;
    onDelete: (offName:string)=> void;
    onUpdate: (offName:string, updates:ICountryUpdate)=> void;
}