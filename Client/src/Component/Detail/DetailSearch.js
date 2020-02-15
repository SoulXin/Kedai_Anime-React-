import React, { Component } from 'react'
import axios from 'axios'
import DetailComplete from './DetailSearchComponent/DetailComplete'
import DetailOnGoing from './DetailSearchComponent/DetailOnGoing'

export default class DetailSearch extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            name : '',
            status : 0,
            image_detail : '',
            description : '',
            rating : '',
            studio : '',
            genre : '',
            googledrive : [],
            zippyshare : [],
            complete : [],
            on_going_googledrive : [],
            on_going_zippyshare : []
        }
    }

    componentDidMount(){
        this._isMounted = true;
        var anime_id = this.props.match.params.anime_id;
        var name = this.props.match.params.name;

        if(this._isMounted){
            axios({
                method : 'GET',
                url : `http://localhost:5000/anime/detail_search_list_of_anime/${anime_id}/${name}`,
                cancelToken : this.source.token,
            })
            .then(response => {
                if(response.data.anime_id){
                    if(response.data.Complete_Anime){
                        this.setState({
                            name : response.data.name,
                            status : 1,
                            image_detail : response.data.image_detail,
                            description : response.data.description,
                            rating : response.data.rating,
                            studio : response.data.studio,
                            genre : response.data.genre,
                            googledrive : response.data.Complete_Anime.Googledrive,
                            zippyshare : response.data.Complete_Anime.Zippyshare,
                            complete : response.data.Complete_Anime.Batch
                        })
                    }else{
                        this.setState({
                            name : response.data.name,
                            status : 0,
                            image_detail : response.data.image_detail,
                            description : response.data.description,
                            rating : response.data.rating,
                            studio : response.data.studio,
                            genre : response.data.genre,
                            on_going_googledrive : response.data.On_Going_Googledrive,
                            on_going_zippyshare : response.data.On_Going_Zippyshare
                        })
                    }
                }else {
                    this.props.history.push('/no_match')
                }
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
        const ViewSearch = () => {
            if(this.state.status){
                return <DetailComplete 
                        image_detail = {this.state.image_detail}
                        name = {this.state.name}
                        description = {this.state.description}
                        rating = {this.state.rating}
                        studio = {this.state.studio}
                        genre = {this.state.genre}
                        googledrive = {this.state.googledrive}
                        zippyshare = {this.state.zippyshare}
                        complete = {this.state.complete}
                    />
            }else{
                return <DetailOnGoing
                            image_detail = {this.state.image_detail}
                            name = {this.state.name}
                            description = {this.state.description}
                            rating = {this.state.rating}
                            studio = {this.state.studio}
                            genre = {this.state.genre}
                            on_going_googledrive = {this.state.on_going_googledrive}
                            on_going_zippyshare = {this.state.on_going_zippyshare}
                            />
            }
        }
            
        return (
            <React.Fragment>
                <ViewSearch/>
            </React.Fragment>
        )
    }
}
