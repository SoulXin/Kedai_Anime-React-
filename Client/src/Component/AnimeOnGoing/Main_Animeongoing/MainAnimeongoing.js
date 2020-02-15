import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import MediaQuery from 'react-responsive'
import CardAnime from '../../Function/CardAnime'

class MainAnimeongoing extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            data : [],
            error : ''
        }
    }

    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted){
            axios({
                method : 'GET',
                url : 'http://localhost:5000/ongoing/check_ongoing_main',
                cancelToken : this.source.token,
            })
            .then(response => {
                this.setState({
                    data : response.data
                })
            })
            .catch(error => {
                console.log("Terdapat Masalah Dengan Server")
            })
        }
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    render() {
        const {data} = this.state;
        const viewData = this.state.data ? 
        data.map((list,index) => {
            return  <CardAnime 
                key = {index} 
                index = {index} 
                anime_id = {list.List_Of_Anime.anime_id}
                name = {list.List_Of_Anime.name}
                studio = {list.List_Of_Anime.studio}
                on_going_id = {list.on_going_id} 
                image = {list.List_Of_Anime.image} 
                image_detail = {list.List_Of_Anime.image_detail} 
                rating = {list.List_Of_Anime.rating} 
                genre = {list.List_Of_Anime.genre}
                episode = {list.episode}
                gridDesktop = "col-6 mt-2 mb-2"
                gridTab = "col-3 px-1"
                gridHandphone = "col-6 px-1"
                id = "main_on_going"
                id_hover = "hover_on_going"
                link =  {`/detail_on_going/${list.List_Of_Anime.anime_id}/${list.List_Of_Anime.name}/${list.on_going_id}`}
            />
                    
        })
        :
        <h1>Loading</h1>
        return (
            <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "container mt-5 pb-5" style = {this.props.background ? {background : 'black',borderRadius : '15px 15px 5px 5px'} : {background : 'whitesmoke',borderRadius : '15px 15px 5px 5px'}}>
                        <div className = "row" style = {{background : 'yellow',borderRadius : '15px 15px 0px 0px'}}>
                            <h3 className = "col-md-2">Ongoing</h3>
                            <Link to = "/on_going_anime" className = "offset-md-7 col-md-3 mt-2">
                                <button  style = {{width : '100%',background : 'none',border : 'none',color : 'red',fontWeight : 'bold'}}>Selengkapnya >>> </button>
                            </Link>
                        </div>
                        <div className = "row mt-2 mb-2">
                            {viewData}
                        </div>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "container mt-4 pb-4" style = {this.props.background ? {background : 'black',borderRadius : '15px 15px 5px 5px'} : {background : 'whitesmoke',borderRadius : '15px 15px 5px 5px'}}>
                        <div className = "row" style = {{background : 'yellow',borderRadius : '15px 15px 0px 0px'}}>
                            <h3 className = "col-1">Ongoing</h3>
                            <Link to = "/on_going_anime" className = "col-3 offset-8 px-0 mt-2">
                                <button  style = {{width : '100%',background : 'none',border : 'none',color : 'red',fontWeight : 'bold'}}>Selengkapnya >>></button>
                            </Link>
                        </div>
                        <div className = "row" style = {{marginTop : '-10px'}}>
                            {viewData}
                        </div>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery maxWidth = {767}>
                    <div className = "container mt-4 pb-4" style = {this.props.background ? {background : 'black',borderRadius : '15px 15px 5px 5px'} : {background : 'whitesmoke',borderRadius : '15px 15px 5px 5px'}}>
                        <div className = "row" style = {{background : 'yellow',borderRadius : '15px 15px 0px 0px'}}>
                            <h3 className = "col-1">Ongoing</h3>
                            <Link to = "/on_going_anime" className = "col-5 offset-5 px-0 mt-2">
                                <button  style = {{width : '100%',background : 'none',border : 'none',color : 'red',fontWeight : 'bold'}}>Selengkapnya</button>
                            </Link>
                        </div>
                        <div className = "row" style = {{marginTop : '-10px'}}>
                            {viewData}
                        </div>
                    </div>
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

export default connect(mapStateToProps,null)(MainAnimeongoing)