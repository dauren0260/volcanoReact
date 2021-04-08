import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default class Carousel extends Component {
    render() {
        return (
            <Splide>
                <SplideSlide>
                    <img src="./bromo.jpg" alt="bromo"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./guatemala.png" alt="guatemala"/>
                </SplideSlide>
                <SplideSlide>
                    <img src="./landscape.jpg" alt="landscape"/>
                </SplideSlide>
            </Splide>
        )
    }
}
