import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {search_anime_action,current_data_action,current_page_action,total_pages_action} from '../../Redux'
import MediaQuery from 'react-responsive'
import CardAnime from '../Function/CardAnime'
import ResponsiveAnime from '../Function/ResponsiveAnime'

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
            console.log("Terdapat Masalah Dengan Server")
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
            <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <ResponsiveAnime
                        currentData = {
                            currentData.map((data,index) => 
                                <CardAnime 
                                    key = {index} 
                                    index = {index} 
                                    name = {data.name} 
                                    studio = {data.studio}
                                    anime_id = {data.anime_id} 
                                    image = {data.image} 
                                    image_detail = {data.image_detail} 
                                    rating = {data.rating} 
                                    genre = {data.genre}
                                    complete = {data.complete}
                                    id = "search"
                                    id_hover = "hover_search"
                                    gridDesktop = "col-md-4 mt-2 mb-2 px-3"
                                    link = {`/detail_search/${data.anime_id}/${data.name}`}
                                />
                            )
                        }
                        currentPage = {currentPage}
                        totalPages = {totalPages}
                        totalData = {totalData}
                        background = {this.props.background}
                        onPageChanged = {this.onPageChanged}
                        title = {`${this.props.match.params.name}`}
                    />
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <ResponsiveAnime
                        currentData = {
                            currentData.map((data,index) => 
                                <div className = "col-3 px-0" key = {index}>
                                    <CardAnime 
                                        index = {index} 
                                        name = {data.name} 
                                        anime_id = {data.anime_id} 
                                        image = {data.image} 
                                        image_detail = {data.image_detail} 
                                        rating = {data.rating} 
                                        genre = {data.genre} 
                                        complete = {data.complete}
                                        gridTab = "col-12 px-1"
                                        link = {`/detail_search/${data.anime_id}/${data.name}`}
                                    />
                                </div>
                            )
                        }
                        currentPage = {currentPage}
                        totalPages = {totalPages}
                        totalData = {totalData}
                        background = {this.props.background}
                        onPageChanged = {this.onPageChanged}
                        title = {`${this.props.match.params.name}`}
                    />
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery maxWidth = {767}>
                    <ResponsiveAnime
                        currentData = {
                            currentData.map((data,index) => 
                                <div className = "col-6 px-0" key = {index}>
                                    <CardAnime 
                                        index = {index} 
                                        name = {data.name} 
                                        anime_id = {data.anime_id} 
                                        image = {data.image} 
                                        image_detail = {data.image_detail} 
                                        rating = {data.rating} 
                                        genre = {data.genre} 
                                        complete = {data.complete}
                                        gridHandphone = "col-12 px-1"
                                        link = {`/detail_search/${data.anime_id}/${data.name}`}
                                    />
                                </div>
                            )
                        }
                        currentPage = {currentPage}
                        totalPages = {totalPages}
                        totalData = {totalData}
                        background = {this.props.background}
                        onPageChanged = {this.onPageChanged}
                        title = {`${this.props.match.params.name}`}
                    />
                </MediaQuery>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        allData : state.search.allData,
        currentData : state.search.currentData,
        currentPage: state.search.currentPage,
        totalPages: state.search.totalPages,
        background : state.header.background,
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