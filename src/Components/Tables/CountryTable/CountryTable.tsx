import type { CountryTableProps } from "./countryTableProps";
import CountryRow from "./CountryRow/CountryRow";
import { useEffect } from "react";

const CountryTable = ({countries, onDelete, onUpdate}:CountryTableProps) => {

    console.log("COUNTRY TABLE RENDERIZANDOSE");
    
    useEffect(()=>{
        console.log("COUNTRY TABLE RENDERIZADA Y MONTADO:", countries?.length);
        // countries.forEach((e)=>{
        //     console.log(e);
        // })
    },[]);

    useEffect(()=>{
        console.log("COUNTRY TABLE RENDERIZADA POR CAMBIO DE PROP COUNTRIES:",countries?.length);
    }, [countries])    

    useEffect(()=>{
        console.log("RENDERIZADO SIN DEPENDENCIAS")
    })

    if(countries == undefined){
        return <div>Error al obtener los datos</div>
    }

    
    else if(countries.length==0){
        return <div>No hay paises que mostrar</div>
    }

    

    return(
        <table>
            <thead>
                <tr>
                    <th>País</th>
                    <th>Capital</th>
                    <th>Moneda</th>
                    <th>Población</th>
                    <th>Densidad poblacional</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {   
                    countries.map((c)=>(
                        
                        <CountryRow
                            key={c.name.official}
                            country={c}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        ></CountryRow>
                    ))
                }
            </tbody>
        </table>
    )
}

export default CountryTable;