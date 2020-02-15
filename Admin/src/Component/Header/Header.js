import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {search_anime_action} from '../../Redux'
class Header extends Component {
    source = axios.CancelToken.source();

    constructor(props){
        super(props)

        this.state = {
            name : '',
            regex : true
        }
    }

    componentWillUnmount(){
        this.source.cancel();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name){
            this.searchAnime(this.state.name)
            this.props.history.push(`/search/${this.state.name}`)
        }else{
            this.props.history.push('/')
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
            console.log(error)
        })
    }
    
    handleReset = () => {
        this.setState({
            name : ''
        })
    }

    render() {
        return (
            <nav className=  "navbar navbar-expand-lg navbar-light fixed-top" style = {{backgroundColor : 'pink'}}>
                <Link className="navbar-brand" to="/">Miyazono</Link>
                <div className = "col-6 mt-1">
                        <form className="form-inline" onSubmit = {this.handleSubmit}>
                            <div className="form-group mx-sm-2 mb-2">
                                <label htmlFor="searchanime" className="sr-only">Password</label>
                                <input type="text" value = {this.state.name} className="form-control" id="searchanime" placeholder="Cari Anime"  style = {{width : '250px'}} onChange = {this.handleChange} onClick = {this.handleReset}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary mb-2">Cari</button>
                        </form>
                    </div>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search_anime_action : (data) => dispatch(search_anime_action(data))
    }
}

export default connect(null,mapDispatchToProps)(withRouter(Header))