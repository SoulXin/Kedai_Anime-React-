import React, { Component } from 'react'
import axios from 'axios'
import Genre from '../Genre/Genre'
import MediaQuery from 'react-responsive'

export default class DetailComplete extends Component {
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
            googledrive : [],
            zippyshare : [],
            complete : [],
            error : '',
        }
    }

    componentDidMount(){
        this._isMounted = true;
        var anime_id = this.props.match.params.anime_id;
        var name = this.props.match.params.name;

        if(this._isMounted){
            axios({
                method : 'GET',
                url : `http://localhost:5000/complete/check_detail_complete/${anime_id}/${name}`,
                cancelToken : this.source.token,
            })
            .then(response => {
                if(response.data){
                    this.setState({
                        name : response.data.name,
                        image_detail : response.data.image_detail,
                        description : response.data.description,
                        genre : response.data.genre,
                        rating : response.data.rating,
                        studio : response.data.studio,
                        googledrive : response.data.Complete_Anime.Googledrive,
                        zippyshare : response.data.Complete_Anime.Zippyshare,
                        complete : response.data.Complete_Anime.Batch
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
        this.source.cancel();
        this._isMounted = false;
    }

    render() {
        const {image_detail,description,genre,rating,googledrive,zippyshare,complete,name,studio} = this.state;

        // 240
        const viewGoogledrive240 = googledrive.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size240)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size240)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size240)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size240)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>

        })
        const viewZippyshare240 = zippyshare.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size240)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size240)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size240)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size240)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })

        // 360
        const viewGoogledrive360 = googledrive.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size360)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size360)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery  minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size360)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size360)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })
        const viewZippyshare360 = zippyshare.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size360)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size360)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size360)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone*/}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size360)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })

        // 480
        const viewGoogledrive480 = googledrive.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size480)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size480)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360}  maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size480)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size480)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })
        const viewZippyshare480 = zippyshare.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size480)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size480)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size480)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size480)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })

        // 720
        const viewGoogledrive720 = googledrive.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size720)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size720)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360}  maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size720)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size720)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })
        const viewZippyshare720 = zippyshare.map((list,index) => {
            return  <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> console.log(list.size720)}>Episode {list.episode}</button>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "col-2 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> console.log(list.size720)}>Episode {list.episode} </button>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> console.log(list.size720)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <div className = "col-3 px-0" key = {index}>
                        <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> console.log(list.size720)}><small>Episode {list.episode}</small> </button>
                    </div>
                </MediaQuery>
            </React.Fragment>
        })

        // Batch
        const viewBatch = complete ?
                <div className = "row mt-5 px-0">
                    <div className = "col-12">
                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                            <h4 className = "col-12">Batch</h4>
                            {/* GoogleDrive */}
                            <div className = "col-12 px-4">
                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                    <h4 className = "mx-auto mt-2">Googledrive</h4>
                                    <div className = "col-12">
                                        <div className = "row">
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.gd_size240)}>Batch 240p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.gd_size360)}>Batch 360p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.gd_size480)}>Batch 480p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.gd_size720)}>Batch 720p</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Zippyshare */}
                            <div className = "col-12 px-4">
                                <div className = "row">
                                    <h4 className = "mx-auto mt-2">Zippyshare</h4>
                                    <div className = "col-12">
                                        <div className = "row">
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.zs_size240)}>Batch 240p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.zs_size360)}>Batch 360p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.zs_size480)}>Batch 480p</button>
                                            </div>
                                            <div className = "col-3 px-1">
                                                <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}} onClick = {()=> console.log(this.state.complete.zs_size720)}>Batch 720p</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        : null ;
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

                                    {/* Sinopsis */}
                                    <div className = "col-11 mx-auto mt-3">
                                        <h4>Sinopsis</h4>
                                        <p style = {{textAlign : 'justify'}}>{description}</p>
                                    </div>

                                    {/* Genre,Studio,Rating */}
                                    <div className = "col-12 mt-3">
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
                                                    <td>{}</td>
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

                                <div class="accordion" id="accordionExample">
                                    {/* Download 240 */}
                                    <div class="card">
                                        <div class="btn btn-primary" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">240</div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className = "row mt-5 px-3">
                                                    <div className = "col-12">
                                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                            {/* GoogleDrive */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                                    <h4 className = "mx-auto">Gooledrive</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewGoogledrive240}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Zippyshare */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row">
                                                                    <h4 className = "mx-auto">Zippyshare</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewZippyshare240}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Download 360 */}
                                    <div class="card">
                                        <div class="btn btn-primary" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">360</div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className = "row mt-5 px-3">
                                                    <div className = "col-12">
                                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                            {/* GoogleDrive */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                                    <h4 className = "mx-auto">Googledrive</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewGoogledrive360}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Zippyshare */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row">
                                                                    <h4 className = "mx-auto">Zippyshare</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewZippyshare360}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Download 480 */}
                                    <div class="card">
                                        <div class="btn btn-primary" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">480</div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className = "row mt-5 px-3">
                                                    <div className = "col-12">
                                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                            {/* GoogleDrive */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                                    <h4 className = "mx-auto">Googledrive</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewGoogledrive480}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Zippyshare */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row">
                                                                    <h4 className = "mx-auto">Zippyshare</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewZippyshare480}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Download 720 */}
                                    <div class="card">
                                        <div class="btn btn-primary" id="headingFour" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">720</div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div className = "row mt-5 px-3">
                                                    <div className = "col-12">
                                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                            {/* GoogleDrive */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                                    <h4 className = "mx-auto">Googledrive</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewGoogledrive720}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            {/* Zippyshare */}
                                                            <div className = "col-12 px-4">
                                                                <div className = "row">
                                                                    <h4 className = "mx-auto">Zippyshare</h4>
                                                                    <div className = "col-12">
                                                                        <div className = "row">
                                                                            {viewZippyshare720}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Batch */}
                                    <div class="card">
                                        <div class="btn btn-primary" id="headingBatch" type="button" data-toggle="collapse" data-target="#collapseBatch" aria-expanded="false" aria-controls="collapseBatch">Batch</div>
                                        <div id="collapseBatch" class="collapse" aria-labelledby="headingBatch" data-parent="#accordionExample">
                                            <div class="card-body">
                                                {viewBatch}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    <div className = "col-11 mx-auto mt-5 mb-5">
                        <div className = "row">
                            <div className = "col-12 px-0 mt-3">
                                <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '400px',borderRadius : '10px'}}/>
                            </div>

                            <div className = "col-12 px-0">
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
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

                        <div class="accordion" id="accordionExample">
                            {/* Download 240 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingOne"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">240</div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive240}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare240}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Download 360 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">360</div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 360p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive360}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare360}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            {/* Download 480 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">480</div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row mt-5 px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 480p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive480}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare480}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Download 720 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingFour" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">720</div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row mt-5 px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 720p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive720}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare720}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Batch */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingFive" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Batch</div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div class="card-body">
                                        {viewBatch}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery maxWidth = {767}>
                    <div className = "col-11 mx-auto mt-5">
                        <div className = "row">
                            <div className = "col-12 px-0 mt-3">
                                <img src = {this.state.image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '200px',borderRadius : '10px'}}/>
                            </div>

                            <div className = "col-12 px-0">
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
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
                        
                        <div class="accordion" id="accordionExample">
                            {/* Download 240 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingOne"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">240</div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive240}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare240}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Download 360 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">360</div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 360p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive360}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare360}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            {/* Download 480 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">480</div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row mt-5 px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 480p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive480}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare480}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Download 720 */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingFour" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">720</div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <div className = "row mt-5 px-0">
                                            <div className = "col-12">
                                                <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                    <h4 className = "col-12">Resolusi : 720p</h4>
                                                    {/* GoogleDrive */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                            <h4 className = "mt-4 mx-auto">Googledrive</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewGoogledrive720}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Zippyshare */}
                                                    <div className = "col-12 px-4">
                                                        <div className = "row">
                                                            <h4 className = "mt-4 mx-auto">Zippyshare</h4>
                                                            <div className = "col-12 px-0">
                                                                <div className = "row">
                                                                    {viewZippyshare720}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Batch */}
                            <div class="card">
                                <div class="btn btn-primary" id="headingFive" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Batch</div>
                                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div class="card-body">
                                        {viewBatch}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </React.Fragment>
        )
    }
}