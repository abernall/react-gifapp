import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


function GifExpertApp() {

    const [categories, setCategories] = useState(['sakura card captor']);

    const handleAdd = ( e,newCategory = 'Coco') => {
        //console.log('1 ', categories);
        //setCategories( [...categories, newCategory]);
        //console.log('2 ', categories);
    }

    return (
        <>
          <h2>GifExpertApp</h2>  
         
          <AddCategory setCategories={ setCategories }/>
          <hr/>
          <ol >
              {
                categories.map( category => 
                  <GifGrid 
                    key = { category }
                    category= { category } />
                )
              }
          </ol>

        </>
    )
}

export default GifExpertApp
