import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom';

// Header
import logo from './logo.png';
import Icon from '@material-ui/core/Icon';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// component
import Main from './containers/main/main';
import Product from './containers/product/product';
import Blog from './containers/blog/blog';
import Shop from './containers/shop/shop';
import Member from './containers/member/member';

export default class App extends Component {

    state = {
        menuClose: true,
        width: document.body.clientWidth,
        collapsed: false,
    }

    mobileMenu = () => {
        const { menuClose } = this.state;

        this.setState({
            menuClose: !menuClose,
        })
    }

    collaspMenu = () => {
        if (this.state.width < 767) {
            this.setState({
                menuClose: true
            })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeMobileMenu);
    }

    resizeMobileMenu = () => {
        this.setState({
            width: document.body.clientWidth
        })

        if (this.state.width >= 767) {
            this.setState({
                menuClose: true
            })
        }
    }


    render() {
        const { menuClose } = this.state;

        return (
            <div>
                <header>
                    <nav>
                        <ul className={menuClose ? "" : "on"}>
                            <li className={`hamburger-icon ${menuClose ? "" : "on"}`} id="hamburgerIcon" onClick={this.mobileMenu}>
                                <span className="hr top"></span>
                                <span className="hr middle"></span>
                                <span className="hr bottom"></span>
                            </li>
                            <li className={`product ${menuClose ? "" : "on"}`}><NavLink to="/product" onClick={this.collaspMenu}>探險專案</NavLink></li>
                            <li className={`blog ${menuClose ? "" : "on"}`}><NavLink to="/blog" onClick={this.collaspMenu}>火山遊記</NavLink></li>
                            <li className="logo"><NavLink to="/main" onClick={this.collaspMenu}><img src={logo} alt="volcano logo" /><h1>火山島</h1></NavLink></li>
                            <li className={`shop ${menuClose ? "" : "on"}`}><NavLink to="/shop" onClick={this.collaspMenu}>探險裝備</NavLink></li>
                            <li className={`memberCenter ${menuClose ? "" : "on"}`}><NavLink to="/member" onClick={this.collaspMenu}>會員中心</NavLink></li>
                            <li className="cart">
                                <Icon component={ShoppingCartIcon} className="shopping-cart"></Icon>
                                <span className="countNum">0</span>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <Switch>
                        <Route path="/product" component={Product} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/member" component={Member} />
                        <Route component={Main} />
                    </Switch>
                </div>

            </div>
        )
    }
}
