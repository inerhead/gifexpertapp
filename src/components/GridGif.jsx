
import GifItem from "./GifItem";
import useFetchGifts from "../hooks/UseFetchGif";
import PropTypes from 'prop-types';


const GridGif = ({ category }) => {
    const {images, isLoading} = useFetchGifts(category)  
    console.log(isLoading)
    return (<>
            <h3>GiftExpertApp <span><button onClick={()=> console.log('first')}>Delete</button></span> </h3>
            <br/>
            <div className='card-grid'>    
                {
                images?.map( (image) => {
                    return <GifItem key={image.id} {...image} />
                })
            }                         
            </div>                       
           </>)
};

GridGif.propTypes = {
    category: PropTypes.string.isRequired,
};
export default GridGif