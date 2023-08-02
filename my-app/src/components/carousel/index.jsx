import React, { useState} from 'react';
import './styles.css';
import { pantkokur } from '../../resources/pontunarkokur/pantkokur';

import {GoTriangleLeft,GoTriangleRight} from 'react-icons/go';
import { 
    NextTransition,
    PreviousTransition} from './carousel'

export const Carousel = () => {  
    const images = pantkokur;
    const [leftHidden, setLeftHidden] = useState(-2);
    const [left, setLeft] = useState(-1);
    const [acitveImg, setActiveImg] = useState(0);
    const [right, setRight] = useState(1);
    const [rightHidden, setRightHidden] = useState(2);


    function nextImage() {
        NextTransition();
        
        setTimeout(() => {
            let RH = (rightHidden + 1) < images.length ? (rightHidden + 1) : rightHidden;
            let R = (right + 1) < images.length ? (right + 1) : right;
            let A = (acitveImg + 1);
            let L = (left + 1);
            let LH = (leftHidden + 1);

            setRightHidden(RH);
            setRight(R);
            setActiveImg(A);
            setLeft(L);
            setLeftHidden(LH);
        },1000);
    }  

    function previousImage() {
        PreviousTransition();

        setTimeout(() => {
            let RH = (rightHidden - 1) >= right ? (rightHidden - 1) : rightHidden;
            let R = (right - 1) >= acitveImg ? (right - 1) : right;
            let A = (acitveImg - 1) >= 0 ? (acitveImg - 1) : acitveImg;
            let L = (left - 1);
            let LH = (leftHidden - 1);

            setRightHidden(RH);
            setRight(R);
            setActiveImg(A);
            setLeft(L);
            setLeftHidden(LH);
        },1000);
    }  

    return (
        <div className={`carousel-container`}>
            <div className='image-container'>
                <div className='active-img-container'>
                    { acitveImg > 0 && (
                        <a 
                            className='slider-tag slider-left'
                            onClick={previousImage}>
                                <GoTriangleLeft className='slider-button slider-left' size={'3em'}/>
                        </a>
                    )}
                    
                    <img src={images[acitveImg]} className={`carousel-img active-img`} alt='img' id={`active-img`}/>
                    { acitveImg < (images.length-1) && (
                        <a 
                            className='slider-tag slider-right'
                            onClick={nextImage}>
                                <GoTriangleRight className='slider-button slider-right' size={'3em'}/>
                        </a>
                    )}
                </div>
                <div className={`slider-item`} id={`side-img-left-hidden-container`}>
                    {leftHidden >= 0 && (
                        <img src={acitveImg > 1 ? images[leftHidden] : ''} 
                             className={`carousel-img`} 
                             alt='img'/>
                    )}
                </div>
                <div className={`slider-item`} id={`side-img-left-container`}>
                    {acitveImg > 0 && (
                        <img src={acitveImg > 0 ? images[left] : ''} 
                        className={`carousel-img`} 
                        alt='img'/>
                    )}
                </div>
                <div className={`slider-item`} id={`side-img-right-container`}>
                    {acitveImg < (images.length - 1) && (
                        <img src={images.length > 1 ? images[right] : ''} 
                             className={`carousel-img`} 
                             alt='img' />
                    )}
                </div>
                <div className={`slider-item`} id={`side-img-right-hidden-container`}>
                    {images.length > 2 && acitveImg < (images.length - 2) && (
                      <img 
                        src={images.length > 2 ? images[rightHidden] : ''} 
                        className={`carousel-img`} 
                        alt='img' />)
                    }
                </div>
            </div>
            
            <div className='dot-container' id={`dot-container`}>
                {images.map((i,index)=> (
                    <div
                        key={`dots${index}`} 
                        id={`dots${index}`}
                        className={index === acitveImg ? 'dots dots-active' : 'dots'}></div>
                ))}
                </div>
        </div>
    )
}