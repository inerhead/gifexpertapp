
import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GridGif from "./components/GridGif"
const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState([]);
    // console.log(categories)
    const onAddCategory = (cat) => {
        const exist = categories.find( category => category === cat)
        if(exist) return
        setCategories([...categories, cat])
        // console.log(cat)
    }
    return (
        <>        
        <h1>GiftExpertApp</h1>        
        <AddCategory setCategory= { (value) => { onAddCategory(value) } } />
        {
            categories.map( category => {
                return <GridGif key={category} category= {category} />
            })
        }        
        </>
    );
};
export default GiftExpertApp;