import React, { Component,Fragment } from 'react';
import ertaale from './imgs/ertaale.jpg';
import bromoImg from './imgs/bromo.jpg';
import aeolianImg from './imgs/Aeolian-Islands.jpg';


export default class Project extends Component {
    render() {
        return (
            <Fragment>
                <div className="item">
                    <h3>探訪地獄之門熔岩湖</h3>
                    <a href="moreinfo_original.html"><img src={ertaale} alt="ertaale"/></a>
                    <div className="item_text">
                        <p className="item_p">爾塔阿雷火山</p>
                        <p className="price">$ 4530</p>
                    </div>
                    <p className="country">伊索比亞</p>
                </div>
                <div className="item">
                    <h3>火山追日計畫</h3>
                    <a href="moreintro.html"><img src={bromoImg} alt="bromoImg"/></a>
                    <div className="item_text">
                        <p className="item_p">婆羅摩火山</p>
                        <p className="price">$ 3680</p>
                    </div>
                    <p className="country">印尼</p>
                </div>
                
                <div className="item">
                    <h3>地中海的蔚藍群島</h3>
                    <a href="moreintro.html"><img src={aeolianImg} alt="aeolianImg"/></a>
                    <div className="item_text">
                        <p className="item_p">埃奧利群島</p>
                        <p className="price">$ 5300</p>
                    </div>
                    <p className="country">義大利</p>
                </div>
                
            </Fragment>
            
        )
    }
}
