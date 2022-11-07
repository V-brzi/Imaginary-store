import React, {useState, useEffect} from 'react';

function Carousel({slides}){

    const [slideNum, setSlideNum] = useState(1);
    const [slide, setSlide] = useState(<div className='carousel-slide'>{slides[0]}</div>);

    function slider(){
        if(slideNum < slides.length - 1){
            setSlideNum(slideNum + 1);
        }
        else if(slideNum === slides.length - 1){
            setSlideNum(0);
        }

        setSlide(<div className='carousel-slide'>{slides[slideNum]}</div>)
    }

    useEffect(() => {
        setTimeout(slider, 5000);
        return () => clearTimeout(slider);
    }, [slideNum])
    
    return (
        <div className='carousel-container'>
            {slide}
        </div>
    )
}

export default Carousel;