import React, { Component, Fragment }  from 'react'

import Carousel from '../carousel/carousel';
import Project from '../project/project';
import Icon from '@material-ui/core/Icon';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import BlogCard from '../blogCard/blogCard'

export default class Main extends Component {
    render() {
        return (
            <Fragment>
                <Carousel />
                <div className="center">
                    <div className="title center">
                        <Icon component={DoubleArrowIcon} className="doubleArrow"></Icon>
                        <h3>探險專案</h3>
                    </div>
                    <div className="container">
                        <Project/>
                    </div>

                    <div className="title center">
                        <Icon component={DoubleArrowIcon} className="doubleArrow"></Icon>
                        <h3>火山遊記</h3>
                    </div>
                    <BlogCard/>

                    <div className="title center">
                        <Icon component={DoubleArrowIcon} className="doubleArrow"></Icon>
                        <h3>探險裝備</h3>
                    </div>

                </div>
            </Fragment>
        )
    }
}
