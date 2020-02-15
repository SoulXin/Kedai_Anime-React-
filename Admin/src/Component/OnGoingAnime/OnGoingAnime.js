import React, { Component } from 'react'
import axios from 'axios'
import CardOnGoing from './CardOnGoing'
import Pagination from '../Pagination/Pagination'

export default class CompleteAnime extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            allData : [],
            currentData : [],
            currentPage: null,
            totalPages: null  
        }
    }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            axios({
                method : "GET",
                url : 'http://localhost:5000/ongoing/check_ongoing_developer',
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    allData : response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    onPageChanged = data => {
        const { allData } = this.state;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentData = allData.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentData, totalPages });
    }

    render() {
        const { allData, currentData, currentPage, totalPages } = this.state;
        const totalData = allData.length;

        if (totalData === 0) return null;

        return (
            <div className="container"style = {{backgroundColor : 'white',borderRadius : '15px',marginTop : '100px',marginBottom : '50px'}}>
                <div className = "row">
                    <h4 className = "col-12 bg-warning" style = {{borderRadius : '15px 15px 0px 0px',padding : '10px'}}>Anime Yang Sedang Berlangsung</h4>
                </div>
                <div className="row">
                    { currentData.map((data,index) => 
                    <CardOnGoing 
                    key = {index} 
                    index = {index} 
                    name = {data.name} 
                    anime_id = {data.anime_id} 
                    image = {data.image} 
                    image_detail = {data.image_detail} 
                    rating = {data.rating} 
                    genre = {data.genre}
                    studio = {data.studio}
                    />) }
                </div>
                <div className = "row">
                    <div className = "col-6 px-4 mx-auto">
                        { currentPage && (
                            <span className="current-page d-inline-block pl-4 text-danger h4">
                            Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                            </span>
                        ) }
                        <Pagination totalRecords={totalData} pageLimit={12} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                </div>
            </div>

        )
    }
}