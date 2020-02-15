import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from '../Component/Main/Main'
import OnGoingAnime from '../Component/OnGoingAnime/OnGoingAnime'
import CompleteAnime from '../Component/CompleteAnime/CompleteAnime'
import Header from '../Component/Header/Header'
import DetailComplete from '../Component/Detail/DetailComplete'
import DetailOnGoing from '../Component/Detail/DetailOnGoing'
import AddAnime from '../Component/AddAnime/AddAnime'
import Search from '../Component/Search/Search'
import DetailSearch from '../Component/Detail/DetailSearch'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route path = "/add_anime" component = {AddAnime}/>
                    <Route path = "/on_going_anime" component = {OnGoingAnime}/>
                    <Route path = "/complete_anime" component = {CompleteAnime}/>
                    <Route path = "/detail_complete/:anime_id/:name" component = {DetailComplete}/>
                    <Route path = "/detail_on_going/:anime_id/:name" component = {DetailOnGoing}/>
                    <Route path = "/search/:name" component = {Search}/>
                    <Route path = "/detail_search/:anime_id/:name" component = {DetailSearch}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
