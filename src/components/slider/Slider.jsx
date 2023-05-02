import React, {useState} from 'react';
import './slider.css'
const Slider = ({images}) => {

    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((index + images.length - 1) % images.length);
    };

    return (
        <div className="slider">
            <div className="slider-image-container">
                <img className='q' src={images[index]} alt={`Image ${index}`} />
            </div>
            <div className="slider-controls">
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
};

export default Slider;