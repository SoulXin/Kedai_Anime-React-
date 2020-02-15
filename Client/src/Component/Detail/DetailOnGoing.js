import React, { Component } from 'react'
import axios from 'axios'
import Genre from '../Genre/Genre'
import SimpleSlider from '../Carousel/Carousel'
import MediaQuery from 'react-responsive'

export default class DetailOnGoing extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            name : '',
            image_detail : '',
            description : '',
            genre : '',
            rating : '',
            studio : '',
            episode : '',
            gd240 : '',
            gd360 : '',
            gd480 : '',
            gd720 : '',
            zs240 : '',
            zs360 : '',
            zs480 : '',
            zs720 : '',
            error : '',
            carousel : []
        }
    }

    componentDidMount(){
        this._isMounted = true;
        var anime_id = this.props.match.params.anime_id;
        var name = this.props.match.params.name;
        var on_going_id = this.props.match.params.on_going_id;

        if(this._isMounted){
            axios({
                method : 'GET',
                url : `http://localhost:5000/ongoing/check_detail_ongoing_client/${anime_id}/${name}/${on_going_id}`,
                cancelToken : this.source.token,
            })
            .then(response => {
                console.log(response.data)
                if(response.data){
                    this.setState({
                        name : response.data.name,
                        image_detail : response.data.image_detail,
                        description : response.data.description,
                        genre : response.data.genre,
                        rating : response.data.rating,
                        studio : response.data.studio,
                        episode : response.data.On_Going_Anime.episode,
                        gd240 : response.data.On_Going_Googledrive[0].size240,
                        gd360 : response.data.On_Going_Googledrive[0].size360,
                        gd480 : response.data.On_Going_Googledrive[0].size480,
                        gd720 : response.data.On_Going_Googledrive[0].size720,
                        zs240 : response.data.On_Going_Zippyshare[0].size240,
                        zs360 : response.data.On_Going_Zippyshare[0].size360,
                        zs480 : response.data.On_Going_Zippyshare[0].size480,
                        zs720 : response.data.On_Going_Zippyshare[0].size720
                    })
    
                    axios({
                        method : 'GET',
                        url : `http://localhost:5000/ongoing/carousel_on_going/${response.data.anime_id}`,
                        cancelToken : this.source.token,
                    })
                    .then(response => {
                        this.setState({
                            carousel : response.data
                        })
                    })
                    .catch(error => {
                        console.log("Terdapat Masalah Dengan Server")
                    })
                }else{
                    this.props.history.push('/no_match')
                }
            })
            .catch(error => {
                console.log("Terdapat Masalah Dengan Server")
            })
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
        this.source.cancel();
    }

    handleCarousel = (anime_id,name,on_going_id) => {
        axios({
            method : 'GET',
            url : `http://localhost:5000/ongoing/check_detail_ongoing_client/${anime_id}/${name}/${on_going_id}`,
            cancelToken : this.source.token,
        })
        .then(response => {
            this.setState({
                image_detail : response.data.image_detail,
                description : response.data.description,
                genre : response.data.genre,
                rating : response.data.rating,
                studio : response.data.studio,
                episode : response.data.On_Going_Anime.episode,
                gd240 : response.data.On_Going_Googledrive[0].size240,
                gd360 : response.data.On_Going_Googledrive[0].size360,
                gd480 : response.data.On_Going_Googledrive[0].size480,
                gd720 : response.data.On_Going_Googledrive[0].size720,
                zs240 : response.data.On_Going_Zippyshare[0].size240,
                zs360 : response.data.On_Going_Zippyshare[0].size360,
                zs480 : response.data.On_Going_Zippyshare[0].size480,
                zs720 : response.data.On_Going_Zippyshare[0].size720
            })
            axios({
                method : 'GET',
                url : `http://localhost:5000/ongoing/carousel_on_going/${anime_id}`,
                cancelToken : this.source.token,
            })
            .then(response => {
                this.setState({
                    carousel : response.data
                })
            })
            .catch(error => {
                console.log("Terdapat Masalah Dengan Server")
            })
        })
        .catch(error => {
            console.log("Terdapat Masalah Dengan Server")
        })
    }

    handleLink = (link) => {
        axios({
            method : 'GET',
            url : `http://localhost:5000/download/check_download/${link}`
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {name,image_detail,description,genre,rating,studio,episode} = this.state;
        const {gd240,gd360,gd480,gd720,zs240,zs360,zs480,zs720} = this.state;

        return (
            <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "container mt-5 mb-5">
                        <div className = "row">
                            {/* Main */}
                            <div className = "col-9 mt-5">
                                <div className = "row">
                                    {/* Image */}
                                    <div className = "col-12">
                                        <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '450px',borderRadius : '10px'}}/>
                                    </div>
                                    
                                    {/* Title + Episode */}
                                    <div className = "col-11 mx-auto mt-3">
                                        <h3>Episode {episode}</h3>
                                        <h4>{name}</h4>
                                    </div>

                                    {/* Sinopsis */}
                                    <div className = "col-11 mx-auto mt-3">
                                        <h4>Sinopsis</h4>
                                        <p style = {{textAlign : 'justify'}}>{description}</p>
                                    </div>

                                    {/* Genre,Studio,Rating */}
                                    <div className = "col-12 mt-3" style = {{textAlign : 'left'}}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Rating</th>
                                                    <td> : </td>
                                                    <td>{rating}</td>
                                                </tr>

                                                <tr>
                                                    <th>Studio</th>
                                                    <td> : </td>
                                                    <td>{studio}</td>
                                                </tr>

                                                <tr>
                                                    <th>Genre</th>
                                                    <td> : </td>
                                                    <td>{genre}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Download */}
                                <div className = "row mt-5 mb-5 px-3">
                                    <div className = "col-12">
                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                            <h4 className = "col-12">{name} (Episode {episode})</h4>
                                            {/* GoogleDrive */}
                                            <div className = "col-12 px-4">
                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                    <h4 className = "col-1 mt-3">GD</h4>
                                                    <div className = "col-11">
                                                        <div className = "row mt-2">
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd240)}>Episode {episode} 240p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd360)}>Episode {episode} 360p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd480)}>Episode {episode} 480p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd720)}>Episode {episode} 720p</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Zippyshare */}
                                            <div className = "col-12 px-4">
                                                <div className = "row">
                                                    <h4 className = "col-1 mt-3">ZS</h4>
                                                    <div className = "col-11">
                                                        <div className = "row mt-2">
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs240)}>Episode {episode} 240p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs360)}>Episode {episode} 360p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs480)}>Episode {episode} 480p</button>
                                                            </div>
                                                            <div className = "col-3">
                                                                <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs720)}>Episode {episode} 720p</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Carousel */}
                                <SimpleSlider data = {this.state.carousel} handleCarousel = {this.handleCarousel}/>
                            </div>

                            {/* Side */}
                            <div className = "col-12 col-sm-12 col-md-3 px-3 mt-5">
                                <div className = "row" style = {{borderRadius : '5px'}}>
                                    <div className = "col-12"  style = {{padding : '10px',background : 'white',borderRadius : '5px 5px 0px 0px',backgroundImage : 'url("/maxdefault.jpg")',backgroundSize : 'cover',backgroundPosition : 'top',backgroundRepeat : 'no-repeat'}}>
                                        <h5 style = {{color : 'pink'}}>Genre Anime</h5>
                                    </div>
                                    <div className = "col-12 px-0">
                                        <Genre/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-11 mx-auto mt-5">
                        <div className = "row">
                            <div className = "col-12 px-0 mt-3">
                                <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '400px',borderRadius : '10px'}}/>
                            </div>

                            <div className = "col-12 px-0">
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h3>Episode {episode}</h3>
                                    <h4>{name}</h4>
                                </div>

                                {/* Sinopsis */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h4>Sinopsis</h4>
                                    <p style = {{textAlign : 'justify'}}>{description}</p>
                                </div>

                                {/* Genre,Studio,Rating */}
                                <div className = "col-12 mt-3" style = {{textAlign : 'left'}}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Rating</th>
                                                <td> : </td>
                                                <td>{rating}</td>
                                            </tr>

                                            <tr>
                                                <th>Studio</th>
                                                <td> : </td>
                                                <td>{studio}</td>
                                            </tr>

                                            <tr>
                                                <th>Genre</th>
                                                <td> : </td>
                                                <td>{genre}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Download */}
                        <div className = "row mt-5 mb-5 px-0">
                            <div className = "col-12">
                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                    <h4 className = "col-12">{name} (Download Episode {episode})</h4>
                                    {/* GoogleDrive */}
                                    <div className = "col-12 px-4">
                                        <div className = "row" >
                                            <h5 className = "col-1 mt-3 px-0">GD</h5>
                                            <div className = "col-11 px-0">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(gd240)}>240p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(gd360)}>360p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(gd480)}>480p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(gd720)}>720p</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Zippyshare */}
                                    <div className = "col-12 px-4">
                                        <div className = "row">
                                            <h5 className = "col-1 mt-3 px-0">ZS</h5>
                                            <div className = "col-11 px-0">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(zs240)}>240p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(zs360)}>360p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(zs480)}>480p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" style = {{width : '100%'}} onClick = {()=> this.handleLink(zs720)}>720p</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SimpleSlider data = {this.state.carousel} handleCarousel = {this.handleCarousel}/>

                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-11 mx-auto mt-5">
                        <div className = "row">
                            <div className = "col-12 px-0 mt-3">
                                <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '200px',borderRadius : '10px'}}/>
                            </div>

                            <div className = "col-12 px-0">
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h3>Episode {episode}</h3>
                                    <h4>{name}</h4>
                                </div>

                                {/* Sinopsis */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h4>Sinopsis</h4>
                                    <p style = {{textAlign : 'justify'}}>{description}</p>
                                </div>

                                {/* Genre,Studio,Rating */}
                                <div className = "col-12 mt-3" style = {{textAlign : 'left'}}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Rating</th>
                                                <td> : </td>
                                                <td>{rating}</td>
                                            </tr>

                                            <tr>
                                                <th>Studio</th>
                                                <td> : </td>
                                                <td>{studio}</td>
                                            </tr>

                                            <tr>
                                                <th>Genre</th>
                                                <td> : </td>
                                                <td>{genre}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Download */}
                        <div className = "row mt-5 mb-5 px-0">
                            <div className = "col-12">
                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                    <h4 className = "col-12">{name} (Download Episode {episode})</h4>
                                    {/* GoogleDrive */}
                                    <div className = "col-12 px-4">
                                        <div className = "row" >
                                            <h5 className = "col-1 mt-3 px-0">GD</h5>
                                            <div className = "col-10 px-0 mx-auto">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd240)}>240p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd360)}>360p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd480)}>480p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd720)}>720p</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Zippyshare */}
                                    <div className = "col-12 px-4">
                                        <div className = "row">
                                            <h5 className = "col-1 mt-3 px-0">ZS</h5>
                                            <div className = "col-10 px-0 mx-auto">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs240)}>240p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs360)}>360p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs480)}>480p</button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs720)}>720p</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SimpleSlider data = {this.state.carousel} handleCarousel = {this.handleCarousel}/>
                    </div>
                </MediaQuery>
            
                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-11 mx-auto mt-5">
                        <div className = "row">
                            <div className = "col-12 px-0 mt-3">
                                <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '200px',borderRadius : '10px'}}/>
                            </div>

                            <div className = "col-12 px-0">
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h3>Episode {episode}</h3>
                                    <h4>{name}</h4>
                                </div>

                                {/* Sinopsis */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h4>Sinopsis</h4>
                                    <p style = {{textAlign : 'justify'}}>{description}</p>
                                </div>

                                {/* Genre,Studio,Rating */}
                                <div className = "col-12 mt-3" style = {{textAlign : 'left'}}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Rating</th>
                                                <td> : </td>
                                                <td>{rating}</td>
                                            </tr>

                                            <tr>
                                                <th>Studio</th>
                                                <td> : </td>
                                                <td>{studio}</td>
                                            </tr>

                                            <tr>
                                                <th>Genre</th>
                                                <td> : </td>
                                                <td>{genre}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Download */}
                        <div className = "row mt-5 mb-5 px-0">
                            <div className = "col-12">
                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                    <h4 className = "col-12">{name} (Download Episode {episode})</h4>
                                    {/* GoogleDrive */}
                                    <div className = "col-12 px-4">
                                        <div className = "row" >
                                            <h5 className = "col-1 mt-3 px-0">GD</h5>
                                            <div className = "col-10 px-0 mx-auto">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd240)}><small>240p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd360)}><small>360p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd480)}><small>480p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(gd720)}><small>720p</small></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Zippyshare */}
                                    <div className = "col-12 px-4">
                                        <div className = "row">
                                            <h5 className = "col-1 mt-3 px-0">ZS</h5>
                                            <div className = "col-10 px-0 mx-auto">
                                                <div className = "row mt-2">
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs240)}><small>240p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs360)}><small>360p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs480)}><small>480p</small></button>
                                                    </div>
                                                    <div className = "col-3">
                                                        <button className = "btn btn-primary" onClick = {()=> this.handleLink(zs720)}><small>720p</small></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SimpleSlider data = {this.state.carousel} handleCarousel = {this.handleCarousel}/>
                    </div>
                </MediaQuery>
            </React.Fragment>
        )
    }
}