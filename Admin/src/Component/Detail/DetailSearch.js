import React, { Component } from 'react'
import axios from 'axios'
import Complete from './Detail/Complete'
import OnGoing from './Detail/OnGoing'

export default class DetailSearch extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            name : '',
            status : 0,
            anime_id : '',
            image_detail : '',
            description : '',
            rating : '',
            studio : '',
            genre : '',
            googledrive : [],
            zippyshare : [],
            complete : [],
            on_going : [],
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
                if(response.data.Complete_Anime){
                    this.setState({
                        name : response.data.name,
                        anime_id : response.data.anime_id,
                        status : 1,
                    })
                }else{
                    this.setState({
                        name : response.data.name,
                        anime_id : response.data.anime_id,
                        status : 0,
                    })
                }
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



    render() {
        const ViewSearch = () => {
            if(this.state.status){
                return <Complete 
                        name = {this.state.name}
                        anime_id = {this.state.anime_id}
                    />
            }else{
                return <OnGoing
                        name = {this.state.name}
                        anime_id = {this.state.anime_id}
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
