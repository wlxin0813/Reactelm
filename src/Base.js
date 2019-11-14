import React, { Component } from 'react'
import "./Base.css"
import {Link,Route,withRouter,Switch,Redirect}  from "react-router-dom"
import Payment from "./Payment"
import Home from "./Home"
import Hot from "./Hot"
import Military from "./Military"
import Pe from "./Pe"
export class Base extends Component {

    render() {
        return (
            <div className="layout">
                <section>
                    {/* 路由出口 */}
                      {/* react 中默认不会做 排他  处理 （默认路由是模糊设置）
                    设置排他处理  exact 排他 */}
                    
                    <Route exact path="/" component={Home}  />
                    <Route path="/payment/:rid/:rname" component={Payment} />
                    <Route path="/pe" component={Pe} />
                    <Route path="/hot" component={Hot} />
                    <Route path="/military" component={Military} />
                </section>         
            </div>
        )
    }
}

export default Base
