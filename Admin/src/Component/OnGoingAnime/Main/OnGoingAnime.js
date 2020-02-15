import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class OnGoingAnime extends Component {
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
                url : `http://localhost:5000/ongoing/check_ongoing_main`,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    data : response.data,
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

    handleEnter = (index) => {
        document.getElementById(index).style.opacity = "0";
        document.getElementById(index).style.transition = "0.5s";
        document.getElementById("hover_on_going" + index).style.display = "block";
    }

    handleLeave = (index) => {
        document.getElementById(index).style.opacity = "1";
        document.getElementById(index).style.transition = "1s";
        document.getElementById("hover_on_going" + index).style.display = "none";
    }
    
    render() {
        const {data} = this.state;
        const viewOnGoing = this.state.data ? 
        data.map((list,index) => {
            return  <div key = {index} className = "col-12 col-sm-12 col-md-6 mt-2 mb-2" style = {{height : '180px'}}  onMouseEnter = {()=>this.handleEnter(index)} onMouseLeave = {()=>this.handleLeave(index)}>
                        <Link to = {`/detail_on_going/${list.List_Of_Anime.anime_id}/${list.List_Of_Anime.name}`} style = {{color : 'black',textDecoration : 'none'}} >
                            {/* Hover */}
                            <div className = "row px-1" style = {{display : 'none',position : 'absolute'}} id = {"hover_on_going" + index}>
                                <div className = "col-12 px-0">
                                    <div className = "row">
                                        <div className = "col-9">
                                            <img  src = {`http://localhost:5000/images/${list.List_Of_Anime.image_detail}`} style = {{width : '100%',height : '181px',borderRadius : '5px 0px 0px 5px'}} alt = {list.List_Of_Anime.image_detail}/>
                                        </div>
                                        <div className = "col-2 mt-2" style = {{backgroundImage : 'url(../sakura.gif)',backgroundSize : '100% 100%'}}>
                                            {/* Japan Text */}
                                            <h4 style = {{textAlign : 'center',color : 'red',fontWeight : 'bold'}}>続きを読む</h4>
                                            <small style = {{marginLeft : '-20px'}}>Selengkapnya</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "row px-1">
                                <div className = "col-12" style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey'}}>
                                    {/* Main */}
                                    <div className = "row"  id = {index}>
                                        <div className = "col-4 px-0">
                                            <img  src = {`http://localhost:5000/images/${list.List_Of_Anime.image}`} style = {{height : '180px',width : '100%',borderRadius : '5px 0px 0px 5px'}} alt = {list.List_Of_Anime.image}/>
                                        </div>
                                        <div className = "col-8" style = {{color : 'black'}}>
                                            <div className = "row" style = {{textAlign : 'left'}}>
                                                {/* Judul */}
                                                <div className = "col-12" style = {{borderBottom : '2px solid black'}}>
                                                    <b>{list.List_Of_Anime.name}</b>
                                                </div>
                                                <div className = "col-12">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th>Episode</th>
                                                                <td> : </td>
                                                                <td>{list.episode}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Rating</th>
                                                                <td> : </td>
                                                                <td>{list.List_Of_Anime.rating}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div>
                                                        <h6 style = {{textAlign : 'center',borderBottom : '1px solid black',fontWeight : 'bold'}}>Genre</h6>
                                                        <i>{list.List_Of_Anime.genre}</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
        })
        :
        <h1>Loading</h1>
        return (
            <div className = "container mt-5" style = {{background : 'whitesmoke',borderRadius : '15px 15px 5px 5px'}}>
                <div className = "row" style = {{background : 'yellow',borderRadius : '15px 15px 0px 0px'}}>
                    <h3 className = "col-md-2">Ongoing</h3>
                    <Link to = "/on_going_anime" className = "offset-md-7 col-md-3 mt-2">
                        <button  style = {{width : '100%',background : 'none',border : 'none',color : 'red',fontWeight : 'bold'}}>Selengkapnya >>> </button>
                    </Link>
                </div>
                <div className = "row mt-2 mb-2">
                    {viewOnGoing}
                </div>
            </div>
        )
    }
}
