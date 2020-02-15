import React, { Component } from 'react'
import axios from 'axios'
import Size240 from '../OnGoing/Size240'
import Size360 from '../OnGoing/Size360'
import Size480 from '../OnGoing/Size480'
import Size720 from '../OnGoing/Size720'
import {withRouter} from 'react-router-dom'

class DetailOnGoing extends Component {

    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            anime_id : '',
            name : '',
            image : '',
            image_detail : '',
            description : '',
            genre : '',
            rating : '',
            studio : '',
            size : '240',
            genre_anime : ["Action",
            "Romance",
            "Comedy",
            "Adventure",
            "Drama",
            "Slice_Of_Life",
            "Fantasy",
            "Supernatural",
            "Horor",
            "Mystery",
            "Psychological",
            "Sci_Fi",
            "Mecha",
            "Harem",
            "Reverse_Harem",
            "Isekai",
            "Reverse_Isekai",
            "Demons",
            "Game",
            "Ecchi",
            "Historical",
            "Kids",
            "Martial_Art",
            "Josei",
            "Cyberpunk",
            "Post_Apocalyptic",
            "Police",
            "Parody",
            "Music",
            "School",
            "Super_Power",
            "Space",
            "Shounen",
            "Shoujo",
            "Seinen",
            "Sports",
            "Tragedy",
            "Vampire",
            "Yaoi",
            "Yuri",
            "Magic",
            "Military"
        ],
        status_genre : [],
        check_genre : 0
        }
    }

    componentDidMount(){
        this._isMounted = true;
        var anime_id = this.props.anime_id;
        var name = this.props.name;

        if(this._isMounted){
            this.check_genre(anime_id)
            axios({
                method : 'GET',
                url : `http://localhost:5000/ongoing/check_detail_ongoing/${anime_id}/${name}`,
                cancelToken : this.source.token,
            })
            .then(response => {
                console.log(response.data)
                this.setState({
                    anime_id : response.data.anime_id,
                    name : response.data.name,
                    image : response.data.image,
                    image_detail : response.data.image_detail,
                    description : response.data.description,
                    genre : response.data.genre,
                    rating : response.data.rating,
                    studio : response.data.studio
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

    handle240 = () => {
        this.setState({
            size : '240'
        })
    }

    handle360 = () => {
        this.setState({
            size : '360'
        })
    }

    handle480 = () => {
        this.setState({
            size : '480'
        })
    }

    handle720 = () => {
        this.setState({
            size : '720'
        })
    }

    fileSelectedHandler_image = (e) => {
        const data = {
            image : this.state.image
        }
        const data_image = new FormData()
        data_image.append('image',e.target.files[0])

        axios({
            method : 'POST',
            url : `http://localhost:5000/anime/delete_image`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            this.handleChange_image(data_image)
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChange_image = (data_image) => {
        var anime_id = this.props.match.params.anime_id;
        axios({
            method : 'PUT',
            url : `http://localhost:5000/anime/update_list_of_anime/${anime_id}`,
            data : data_image,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                image : response.data.image
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    fileSelectedHandler_image_detail = (e) => {
        const data = {
            image_detail : this.state.image_detail
        }
        const data_image = new FormData()
        data_image.append('image_detail',e.target.files[0])

        axios({
            method : 'POST',
            url : `http://localhost:5000/anime/delete_image_detail`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            this.handleChange_image_detail(data_image)
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChange_image_detail = (data_image) => {
        var anime_id = this.props.match.params.anime_id;
        axios({
            method : 'PUT',
            url : `http://localhost:5000/anime/update_list_of_anime/${anime_id}`,
            data : data_image,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                image_detail : response.data.image_detail
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    check_genre = (anime_id) => {
        axios({
            method : 'GET',
            url : `http://localhost:5000/genre/check_genre/${anime_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            console.log(response.data)
            if(response.data){
                var newItem = [
                    response.data.action,
                    response.data.romance,
                    response.data.comedy,
                    response.data.adventure,
                    response.data.drama,
                    response.data.slice_of_life,
                    response.data.fantasy,
                    response.data.supernatural,
                    response.data.horor,
                    response.data.mystery,
                    response.data.psychological,
                    response.data.sci_fi,
                    response.data.mecha,
                    response.data.harem,
                    response.data.reverse_harem,
                    response.data.isekai,
                    response.data.reverse_isekai,
                    response.data.demons,
                    response.data.game,
                    response.data.ecchi,
                    response.data.historical,
                    response.data.kids,
                    response.data.martial_art,
                    response.data.josei,
                    response.data.cyberpunk,
                    response.data.post_apocalyptic,
                    response.data.police,
                    response.data.parody,
                    response.data.music,
                    response.data.super_power,
                    response.data.school,
                    response.data.space,
                    response.data.shounen,
                    response.data.shoujo,
                    response.data.seinen,
                    response.data.sports,
                    response.data.tragedy,
                    response.data.vampire,
                    response.data.yaoi,
                    response.data.yuri,
                    response.data.magic,
                    response.data.military,
                ]
                this.setState({
                    status_genre : newItem,
                    check_genre : 1
                })
            }else{
                this.setState({
                    check_genre : 0
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChangeGenre = (list) => {
        var anime_id = this.state.anime_id;
        var e = document.getElementById(list);
        var strUser = e.options[e.selectedIndex].value;
        console.log(list,strUser)

        axios({
            method : 'PUT',
            url :  `http://localhost:5000/genre/update_genre/${list}/${strUser}/${anime_id}`,
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleAddGenre = () => {
        var anime_id = this.state.anime_id;

        axios({
            method : 'POST',
            url : `http://localhost:5000/genre/add_genre/${anime_id}`,
            cancelToken : this.source.token,
        })
        .then(response => {
            this.setState({
                check_genre : 1
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleUpdate = () => {
        var anime_id = this.state.anime_id;

        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var genre = document.getElementById("genre").value;
        var rating = document.getElementById("rating").value;
        var studio = document.getElementById("studio").value;

        const data = new FormData()
        data.append('name',name)
        data.append('description',description)
        data.append('genre',genre)
        data.append('rating',rating)
        data.append('studio',studio)

        axios({
            method : 'PUT',
            url : `http://localhost:5000/anime/update_list_of_anime/${anime_id}`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            this.props.history.push(`/detail_on_going/${anime_id}/${name}`)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {
        console.log(this.state.check_genre)
        const {name,image,image_detail,description,genre,rating,studio,genre_anime,status_genre} = this.state;
        const ViewSize = () => {
            if(this.state.size === "240"){
                return <Size240 anime_id = {this.state.anime_id} name = {this.state.name}/>
            }else if(this.state.size === "360"){
                return <Size360 anime_id = {this.state.anime_id} name = {this.state.name}/>
            }else if(this.state.size === "480"){
                return <Size480 anime_id = {this.state.anime_id} name = {this.state.name}/>
            }else if(this.state.size === "720"){
                return <Size720 anime_id = {this.state.anime_id} name = {this.state.name}/>
            }
        }
        
        const mapGenre = genre_anime.map((list,index) => {
            return <div className="col-3 mt-1 mb-1" key = {index}>
                <div className = "row">
                    <div className = "col">
                    <label htmlFor="genre">{list}</label>
                    </div>
                    <div className = "col">
                            <select id = {list.toLowerCase()} className="form-control" onChange = {()=>this.handleChangeGenre(list.toLowerCase())}>
                                <option disabled>Status</option>
                                {
                                    status_genre[index] ? 
                                    <React.Fragment>
                                        <option value = "1" selected>Ya</option>
                                        <option value = "0">Tidak</option>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <option value = "1" >Ya</option>
                                        <option value = "0"selected>Tidak</option>
                                    </React.Fragment>
                                }
                                
                            </select>
                    </div>
                </div>
            </div>
        })

        return (
            <div className = "container-fluid" style = {{marginTop : '70px'}}>
                <div className = "row">
                    <div className = "col-12">
                        <h1 className = "bg bg-warning" style = {{textAlign : 'center'}}>ON GOING ANIME</h1>
                    </div>
                    {/* Data - Data Detail Anime */}
                    <div className = "col-12">
                        <div className = "row">
                            <div className = "col-2" style = {{textAlign : 'center'}}>
                                <h1>Cover</h1>
                                <img src = {this.state.image ? `http://localhost:5000/images/${image}` : null} alt = {image} style = {{height : '300px',width : '100%'}}/>
                                <input className = "mt-2 mb-2" type = "file" id = "image"  onChange = {this.fileSelectedHandler_image}/>
                            </div>

                            <div className = "col-4" style = {{textAlign : 'center'}}>
                                <h1>Detail</h1>
                                <img src = {this.state.image ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{height : '300px',width : '100%'}}/>
                                <input className = "mt-2 mb-2" type = "file" id = "image_detail" onChange = {this.fileSelectedHandler_image_detail}/>
                            </div>

                            {/* Kriteria */}
                            <div className = "col-6" style = {{textAlign : 'left'}}>
                                <h1>Detail Anime</h1>
                                <table cellPadding = "5" style = {{width : '100%'}}>
                                    <tbody>
                                        <tr>
                                            <th>Nama</th>
                                            <td> : </td>
                                            <td>
                                                <input id = "name" type = "text" defaultValue = {name} className = "form-control"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Deskripsi Anime</th>
                                            <td> : </td>
                                            <td>
                                                <textarea id = "description" type = "text" rows = "3" defaultValue = {description} className = "form-control"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Genre</th>
                                            <td> : </td>
                                            <td>
                                                <input id = "genre" type = "text" defaultValue = {genre} className = "form-control"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Rating</th>
                                            <td> : </td>
                                            <td>
                                                <input id = "rating" type = "text" defaultValue = {rating} className = "form-control"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Studio</th>
                                            <td> : </td>
                                            <td>
                                                <input id = "studio" type = "text" defaultValue = {studio} className = "form-control"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className = "btn btn-outline-success mx-auto" style = {{width : '100%'}} onClick = {this.handleUpdate}>Update Data</button>
                            </div>
                        </div>
                    </div>

                    <div className = "col-12">
                        <h1>Genre Anime</h1>
                        <div className="row">
                            {this.state.check_genre ? mapGenre :
                                <div className = "px-5 col-12">
                                    <button className = "btn btn-outline-primary" style = {{width : '100%',height : '150px'}} onClick = {this.handleAddGenre}>Add Genre</button>
                                </div>
                            }
                        </div>
                    </div>

                    <div className = "col-12 mt-5">
                        <div className = "row">
                            <div className = "col-3 mx-auto">
                                <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {this.handle240}>240p</button>
                            </div>
                            <div className = "col-3 mx-auto">
                                <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {this.handle360}>360p</button>
                            </div>
                            <div className = "col-3 mx-auto">
                                <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {this.handle480}>480p</button>
                            </div>
                            <div className = "col-3 mx-auto">
                                <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {this.handle720}>720p</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "row">
                    <ViewSize/>
                </div>
            </div>

        )
    }
}

export default withRouter(DetailOnGoing)