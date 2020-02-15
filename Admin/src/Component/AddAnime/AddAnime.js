import React, { Component } from 'react'
import axios from 'axios'

export default class AddAnime extends Component {
    source = axios.CancelToken.source();

    constructor(props){
        super(props)

        this.state = {
            name : '',
            image : null,
            image_detail : null,
            description : '',
            genre : '',
            rating : '',
            studio : '',
            complete : '',
        }
    }

    componentWillUnmount(){
        this.source.cancel();
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name',this.state.name)
        data.append('image',this.state.image)
        data.append('image_detail',this.state.image_detail)
        data.append('description',this.state.description)
        data.append('genre',this.state.genre)
        data.append('rating',parseFloat(this.state.rating))
        data.append('studio',this.state.studio)
        data.append('complete',parseInt(this.state.complete))

        axios({
            method : 'POST',
            url : 'http://localhost:5000/anime/add_list_of_anime',
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            var complete = parseInt(this.state.complete);
            if(complete){
                axios({
                    method : 'POST',
                    url : `http://localhost:5000/complete/add_complete/${response.data.anime_id}`,
                    cancelToken : this.source.token
                })
                .then(response => {
                    this.props.history.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
            }else {
                axios({
                    method : 'POST',
                    url : `http://localhost:5000/ongoing/add_ongoing/${response.data.anime_id}`,
                    cancelToken : this.source.token
                })
                .then(response => {
                    this.googledrive(response.data.anime_id,response.data.on_going_id)
                    this.zippyshare(response.data.anime_id,response.data.on_going_id)
                })
                .catch(error => {
                    console.log(error)
                })
                this.props.history.push(`/detail_on_going/${response.data.anime_id}/${response.data.name}`)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    googledrive(anime_id,on_going_id){
        axios({
            method : 'POST',
            url : `http://localhost:5000/on_going_googledrive/add_on_going_googledrive/${anime_id}/${on_going_id}`,
            cancelToken : this.source.token
        })
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })
    }
    
    zippyshare(anime_id,on_going_id){
        axios({
            method : 'POST',
            url : `http://localhost:5000/on_going_zippyshare/add_on_going_zippyshare/${anime_id}/${on_going_id}`,
            cancelToken : this.source.token
        })
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })
    }
    
    fileSelectedHandler = (e) => {
        this.setState({
            [e.target.id] : e.target.files[0]
        })
    }

    render() {
        return (
            <div className = "container" style = {{marginTop : '70px'}}>
                <div className = "row">
                    <div className = "col-12">
                        <form onSubmit = {this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nama Anime</label>
                            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Nama Anime" onChange = {this.handleChange}/>
                            <small id="emailHelp" className="form-text text-muted">Masukan Nama Anime</small>
                        </div>
                        <div className="form-row mt-2">
                            <div className="col">
                                <label htmlFor="image">Cover Anime</label>
                                <input type="file" className="form-control-file" id="image" onChange = {this.fileSelectedHandler}/>
                            </div>
                            <div className="col">
                                <label htmlFor="image_detail">Detail Anime</label>
                                <input type="file" className="form-control-file" id="image_detail" onChange = {this.fileSelectedHandler}/>
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="description">Deskripsi Anime</label>
                            <textarea className="form-control" id="description" rows="3" onChange = {this.handleChange}></textarea>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="genre">Genre</label>
                            <input type="text" className="form-control" id="genre" aria-describedby="genre" placeholder="Genre Anime" onChange = {this.handleChange}/>
                            <small id="emailHelp" className="form-text text-muted">Ketikan Genre Anime (action, drama, dll)</small>
                        </div>

                        <div className="form-row mt-2">
                            <div className="col">
                                <label htmlFor="rating">Rating Anime</label>
                                <input type="text" className="form-control" id="rating" aria-describedby="rating" placeholder = "Masukan Rating Anime" onChange = {this.handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="studio">Studio Pembuatan Anime</label>
                                <input type="text" className="form-control" id="studio" aria-describedby="studio" placeholder = "Masukan Studio Pembuatan Anime" onChange = {this.handleChange}/>
                            </div>
                            <div className="col">
                                <label htmlFor="studio">Status Anime</label>
                                <select id="complete" className="form-control" onChange = {this.handleChange}>
                                    <option disabled selected>Status Anime</option>
                                    <option value = "1">Selesai Tayang</option>
                                    <option value = "0">Belum Selesai Tayang</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </form>
                    </div>



                </div>
            </div>
        )
    }
}
