import React, {useState, useRef, useContext, useEffect} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Rating from './Rating';
import {Context} from '../Contex'

function Info({product}) {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const thisRef = useRef(null);
    const [listening, setListening] = useState(false); 
    const {listenForOutsideClicks} = useContext(Context)

    useEffect(listenForOutsideClicks(
        listening,
        setListening,
        thisRef,
        setShow,
    ));

    function handleClick(event){
        setShow(!show);
        setTarget(event.target);
    };


    return (
        <div ref={thisRef}>
        <i className="fa-solid fa-circle-info fa-lg" onClick={handleClick}></i>

        <Overlay
            show={show}
            target={target}
            placement="bottom-start"
            container={thisRef}
            containerPadding={20}
        >
            <Popover id="popover-contained" className="popover-contained">
                <Popover.Header as="h3"><strong>Product details:</strong></Popover.Header>
                <Popover.Body className="popover-body">
                    <div>
                        <strong>About:</strong> {product.description}
                    </div>
                    <div className='details-middle'>
                        <strong>Stock:</strong> {product.rating.count} pc
                    </div>
                    <Rating rating={product.rating} />
                </Popover.Body>
            </Popover> 
        </Overlay>
        </div>
    );
}

export default Info;