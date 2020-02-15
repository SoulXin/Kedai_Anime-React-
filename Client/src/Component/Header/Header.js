import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import {search_anime_action} from '../../Redux'
import MediaQuery from 'react-responsive'

class Header extends Component {
    source = axios.CancelToken.source();

    constructor(props){
        super(props)

        this.state = {
            name : '',
            type : 0,
            regex : true
        }
    }

    componentWillUnmount(){
        this.source.cancel();
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var type = this.state.type;
        if(type === 0){
            if(this.state.name){
                this.searchAnime(this.state.name)
                this.props.history.push(`/search/${this.state.name}`)
            }else{
                this.props.history.push('/')
            }
        }else if(type === 1){
            if(this.state.name){
                this.searchAnime(this.state.name)
                this.props.history.push(`/search/${this.state.name}`)
            }else{
                this.props.history.push('/')
            }
            document.getElementById("btn_dropdown").click();
        }
    }

    handleChange = (e) => {
        var regex = /[.*+?^${}()|&[\]\\]/;
        if(regex.test(e.target.value) === true){
            this.setState({
                name : ''
            })
        }else{
            this.setState({
                name : e.target.value
            })
        }
    }

    searchAnime(anime_name){
        this.props.search_anime_action([])
        axios({
            method : 'GET',
            url : `http://localhost:5000/anime/search_list_of_anime/${anime_name}`,
            cancelToken : this.source.token
        })
        .then(response => {
            this.props.search_anime_action(response.data)
        })
        .catch(error => {
            console.log("Terdapat Masalah Dengan Server")
        })
    }
    
    handleReset = (id) => {
        this.setState({
            name : '',
            type : id
        })
    }

    handleClick = () => {
        document.getElementById("btn_dropdown").click();
    }
    render() {
        return (
            <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <nav className= {this.props.background ? "navbar navbar-expand-lg navbar-light fixed-top" : "navbar navbar-expand-lg navbar-light fixed-top"} style = {{backgroundColor : 'pink'}}>
                        <Link className="navbar-brand" to="/">Miyazono</Link>
                        <div className = "col-6 mt-1">
                            <form className="form-inline" onSubmit = {this.handleSubmit}>
                                <div className="form-group mx-sm-2 mb-2">
                                    <label htmlFor="searchanime" className="sr-only">Password</label>
                                    <input type="text" value = {this.state.name} className="form-control" id="searchanime" placeholder="Cari Anime Kesayangan Anda"  style = {{width : '250px'}} onChange = {this.handleChange} onClick = {()=>this.handleReset(0)}/>
                                </div>
                                <button type="submit" className="btn btn-outline-primary mb-2">Cari</button>
                            </form>
                        </div>

                        <div className = "offset-4">
                            <ToggleSwitch/>
                        </div>
                    </nav>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top row" style = {{backgroundColor : 'pink'}}>
                        <div className = "col-1">
                            <button id = "btn_dropdown" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className = "mx-auto">
                            <Link  to = "/" className="navbar-brand">Miyazono</Link>
                        </div>

                        <div className = "col-1 px-0">
                            <ToggleSwitch/>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to = "/" className="nav-link" onClick = {this.handleClick}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/genre" className="nav-link" onClick = {this.handleClick}>Genre</Link>
                            </li>
                            </ul>
                            <form className="form-inline" onSubmit = {this.handleSubmit}>
                                <div className = "col-11 mx-auto">
                                    <div className = "row">
                                        <div className = "col-10 px-2">
                                            <input type="text" value = {this.state.name} className="form-control" id="searchanime" placeholder="Cari Anime"  style = {{width : '100%'}} onChange = {this.handleChange} onClick = {()=>this.handleReset(1)}/>
                                        </div>
                                        <div className = "col-2 px-2">
                                            <button className="btn btn-outline-success" type="submit" style = {{width : '100%'}}>Cari</button>
                                        </div>
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </nav>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery maxWidth = {767}>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top row" style = {{backgroundColor : 'pink'}}>
                        <div className = "col-1">
                            <button id = "btn_dropdown" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className = "col-1">
                            <Link  to = "/" className="navbar-brand">Miyazono</Link>
                        </div>

                        <div className = "col-3">
                            <ToggleSwitch/>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to = "/" className="nav-link" onClick = {this.handleClick}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/genre" className="nav-link" onClick = {this.handleClick}>Genre</Link>
                            </li>
                            </ul>
                            <form className="form-inline" onSubmit = {this.handleSubmit}>
                                <div className = "col-12">
                                    <div className = "row">
                                        <div className = "col-9 px-2">
                                            <input type="text" value = {this.state.name} className="form-control" id="searchanime" placeholder="Cari Anime"  style = {{width : '100%'}} onChange = {this.handleChange} onClick = {()=>this.handleReset(1)}/>
                                        </div>
                                        <div className = "col-3 px-2">
                                            <button className="btn btn-outline-success" type="submit" style = {{width : '100%'}}>Cari</button>
                                        </div>
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </nav>
                </MediaQuery>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        background : state.header.background
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search_anime_action : (data) => dispatch(search_anime_action(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))