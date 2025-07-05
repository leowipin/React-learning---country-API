export interface ICountry{
    name:{common:string, official:string};
    capital:string[];
    currencies:{[currencyCode:string]:{name:string}};
    area:number;
    population:number;
}

export interface ICountryUpdate{
    commonName:string;
    capital:string[];
    population:number;
}