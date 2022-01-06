/***
 * Se encarga de realizar la petición automática cuando se carga 
 * el compomente la primera vez, o cuando cambie la categoria
 */
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

     useEffect(()=>{
        //Cuerpo de peticion http para traer las imagenes
        getGifs( category )
            .then( imgs => {  
                setState({
                    data: imgs,
                    loading: false
                })   
            })
     }, [ category ]);

 

    return state; //{data:[], loading:true}
    
}