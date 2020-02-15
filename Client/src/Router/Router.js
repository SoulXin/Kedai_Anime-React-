import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from '../Component/Header/Header'
import Main from '../Component/Main/Main'
import DetailComplete from '../Component/Detail/DetailComplete'
import DetailOnGoing from '../Component/Detail/DetailOnGoing'
import AnimeOnGoing from '../Component/AnimeOnGoing/AnimeOnGoing'
import AnimeComplete from '../Component/AnimeComplete/AnimeComplete'
import GenreResult from '../Component/Genre/GenreResult'
import Search from '../Component/Search/Search'
import DetailSearch from '../Component/Detail/DetailSearch'
import Genre from '../Component/Genre/Genre'
import NoMatch from '../Component/NoMatch/NoMatch'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route path = "/detail_complete/:anime_id/:name" component = {DetailComplete}/>
                    <Route path = "/detail_on_going/:anime_id/:name/:on_going_id" component = {DetailOnGoing}/>
                    <Route path = "/on_going_anime" component = {AnimeOnGoing}/>
                    <Route path = "/detail_search/:anime_id/:name" component = {DetailSearch}/>
                    <Route path = "/complete_anime" component = {AnimeComplete}/>
                    <Route path = "/genre/:genre" component = {GenreResult}/>
                    <Route path = "/genre" component = {Genre}/>
                    <Route path = "/search/:name" component = {Search}/>
                    <Route path = "/no_match" component = {NoMatch}/>
                    <Route path = "*" component = {NoMatch}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
