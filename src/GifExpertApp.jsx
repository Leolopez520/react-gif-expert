import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Vinland Saga' ])

    const onAddCategory = ( newCategory ) => {
        if (categories.map(cat => cat.toLowerCase()).includes(newCategory.toLowerCase())) return;
        setCategories ( [ newCategory, ...categories])

    }
    
    return (
    <>
    

    <h1>GIF Expert App</h1>
    <AddCategory 
        
        //setCategories= { setCategories }
        onNewCategory = { (event) => onAddCategory(event) }
    />

        { 
        categories.map( ( category ) => (
                <GifGrid 
                    key={ category }
                    category={ category } 
                    />
        ))
        }

    </>
  )
}
