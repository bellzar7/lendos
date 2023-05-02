import React from 'react';
import {motion} from "framer-motion";
import {useEffect, useState, useRef} from 'react';
import './Carousel.css'

const Carousel = ({images}) => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div>
            <motion.div
                className='carousel'
                ref={carousel}
                whileTap={{cursor: 'grabbing'}}>
            <motion.div
                drag='x'
                dragConstraints={{right:0, left: -width}}
                className='inner-carousel'>
                {images.map((image, index) => {
                    return (
                        <motion.div key={index} className='item'>
                            <img src={image} alt={index} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
        </div>

    );
};


export default Carousel;