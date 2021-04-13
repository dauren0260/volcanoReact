import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide-core.min.css';

import guatemala from './guatemala.jpg';
import bromo from './bromo.jpg';
import nightView from './nightView.jpg';
import guatemalaGalaxy from './guatemalaGalaxy.jpg';
import sunsetView from './sunsetView.jpg';

export default class Carousel extends Component {

    componentDidMount(){
        document.querySelector("ul.splide__list").style.transform = "translateX(0px)";
    }


    render() {
        

        return (
            <Splide className="center" options={ {
                type         : 'loop',
                gap          : '1em',
                autoplay     : true,
                width: 1200,
                autoWidth: true,
                interval: 3000,
                focus : 'center',
                // clones:1,

                resetProgress: false,
                pauseOnFocus:false,
                padding: {
                    right: '5rem',
                    left : '5rem',
                },
            }} 
            hasAutoplayProgress>
                <SplideSlide>
                    <img src={guatemala} alt="bromo"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={bromo} alt="guatemala"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={nightView} alt="nightView"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={guatemalaGalaxy} alt="guatemalaGalaxy"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={sunsetView} alt="sunsetView"/>
                </SplideSlide>
            </Splide>
        )
    }
}
