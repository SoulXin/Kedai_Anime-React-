import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import CardSearch from './CardSearch'
import Pagination from '../Pagination/Pagination'
import {search_anime_action,current_data_action,current_page_action,total_pages_action} from '../../Redux'

class Search extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            error : ''
        }
    }

    componentDidMount(){
        this.searchAnime(this.props.match.params.name)
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    searchAnime(anime_name){
        axios({
            method : 'GET',
            url : `http://localhost:5000/anime/search_list_of_anime/${anime_name}`,
            cancelToken : this.source.toke
        })
        .then(response => {
            this.props.search_anime_action(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    onPageChanged = data => {
        const { allData } = this.props;
        const { currentPage, totalPages, pageLimit } = data;
        const offset = (currentPage - 1) * pageLimit;
        const currentData = allData.slice(offset, offset + pageLimit);
    
        this.props.current_page_action(currentPage);
        this.props.current_data_action(currentData);
        this.props.total_pages_action(totalPages);
    }

    render() {
        const { allData, currentData, currentPage, totalPages } = this.props;
        const totalData = allData.length;
        if (totalData === 0) return null;

        return (
            <div className="container" style = {{backgroundColor : 'white',borderRadius : '15px',marginTop : '100px',marginBottom : '50px'}}>
                <div className = "row">
                    <h4 className = "col-12" style = {{backgroundColor : 'yellow',borderRadius : '15px 15px 0px 0px',padding : '10px'}}>Hasil Pencarian : {this.props.match.params.name}</h4>
                </div>
                
                <div className="row">
                    { currentData.map((data,index) => <CardSearch key = {index} index = {index} name = {data.name} anime_id = {data.anime_id} image = {data.image} image_detail = {data.image_detail} rating = {data.rating} genre = {data.genre}/>) }
                </div>
                <div className = "row">
                    <div className = "col-6 px-4 mx-auto">
                        { currentPage && (
                            <span className="current-page d-inline-block pl-4 text-danger h4">
                            Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                            </span>
                        ) }
                        <Pagination totalRecords={totalData} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allData : state.search.allData,
        currentData : state.search.currentData,
        currentPage: state.search.currentPage,
        totalPages: state.search.totalPages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search_anime_action : (data) => dispatch(search_anime_action(data)),
        current_page_action : (data) => dispatch(current_page_action(data)),
        current_data_action : (data) => dispatch(current_data_action(data)),
        total_pages_action : (data) => dispatch(total_pages_action(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)