import React, { Component } from 'react'
import axios from 'axios'

export default class Size720 extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            googledrive : [],
            zippyshare : [],
        }
        this.buttonAddGoogledrive = React.createRef();
        this.buttonAddZippyshare = React.createRef();
    }
    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted && this.props.anime_id){
            this.googledrive(this.props.anime_id)
            this.zippyshare(this.props.anime_id)
        }else{
            console.log("Loading Take a data")
        }
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    googledrive(anime_id){
        axios({
            method : 'GET',
            url : `http://localhost:5000/on_going_googledrive/check_on_going_googledrive/${anime_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                googledrive : response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    zippyshare(anime_id){
        axios({
            method : 'GET',
            url : `http://localhost:5000/on_going_zippyshare/check_on_going_zippyshare/${anime_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                zippyshare : response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleAdd = (episode) => {
        var anime_id = this.props.anime_id;
        var input = document.getElementById("add_link").value;
        const data = {
            size720 : input,
            episode : episode
        }

        axios({
            method : 'POST',
            url : `http://localhost:5000/ongoing/add_ongoing/${anime_id}`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            document.getElementById("add_link").value = ""
            // Googledrive
            this.add_googledrive(anime_id,response.data.on_going_id,data)
            // Zippyshare
            this.add_zippyshare(anime_id,response.data.on_going_id,data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleUpdate = (store,id,index,anime_id,link) => {
        if(store === "googledrive"){
            var input_googledrive = document.getElementById("googledrive" + index).value;
            const data = {
                size720 : input_googledrive,
                link720 : link,
                anime_id : anime_id
            }
            axios({
                method : 'PUT',
                url : `http://localhost:5000/on_going_googledrive/update_ongoing_googledrive/${id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    googledrive : response.data
                })
                alert(`Data Episode ${index + 1} Untuk GOOGLEDRIVE - 720 Sudah DiPerbarui`)
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zippyshare"){
            var input_zippyshare = document.getElementById("zippyshare" + index).value;
            const data = {
                size720 : input_zippyshare,
                link720 : link,
                anime_id : anime_id
            }
            axios({
                method : 'PUT',
                url : `http://localhost:5000/on_going_zippyshare/update_ongoing_zippyshare/${id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    zippyshare : response.data
                })
                alert(`Data Episode ${index + 1} Untuk ZIPPYSHARE - 720 Sudah DiPerbarui`)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    handleDelete = (index,on_going_id) => {
        axios({
            method : 'DELETE',
            url : `http://localhost:5000/ongoing/delete_on_going/${on_going_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            var data_temp_zippyshare = this.state.zippyshare;
            data_temp_zippyshare.splice(index,1)
            var data_temp_googledrive = this.state.googledrive;
            data_temp_googledrive.splice(index,1)

            this.setState({
                googledrive : data_temp_googledrive,
                zippyshare : data_temp_zippyshare
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    add_googledrive(anime_id,on_going_id,data){
        axios({
            method : 'POST',
            url : `http://localhost:5000/on_going_googledrive/add_on_going_googledrive/${anime_id}/${on_going_id}`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            var data_temp = this.state.googledrive;
            data_temp.push(response.data)

            this.setState({
                googledrive : data_temp
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    add_zippyshare(anime_id,on_going_id,data){
        axios({
            method : 'POST',
            url : `http://localhost:5000/on_going_zippyshare/add_on_going_zippyshare/${anime_id}/${on_going_id}`,
            data : data,
            cancelToken : this.source.token
        })
        .then(response => {
            var data_temp = this.state.zippyshare;
            data_temp.push(response.data)

            this.setState({
                zippyshare : data_temp
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleCancel = () => {
        document.getElementById("add_link").value = ""
    }
    render() {
        const {googledrive,zippyshare} = this.state;
        const viewGoogledrive = this.state.googledrive ? 
        googledrive.map((list,index) => {
            return <tr key = {index}>
                <td>{list.episode}</td>
                <td>
                    <input id = {"googledrive" + index} className = "form-control" type = "text" defaultValue = {list.size720} style = {{width : '100%'}}/>
                </td>
                <td>
                    <button className = "btn btn-primary" onClick = {()=> this.handleUpdate("googledrive",list.googledrive_id,index,list.anime_id,list.size720)} style = {{width : '160px'}}>Update Episode {list.episode}</button>
                </td>
                <td>
                    <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleDelete(index,list.on_going_id)}>Hapus Episode {list.episode}</button>
                </td>
            </tr>
        }) : null;

        const viewZippyshare = this.state.zippyshare ? 
        zippyshare.map((list,index) => {
            return <tr key = {index}>
                <td>{list.episode}</td>
                <td>
                    <input id = {"zippyshare" + index} className = "form-control" type = "text" defaultValue = {list.size720} style = {{width : '100%'}}/>
                </td>
                <td>
                    <button className = "btn btn-primary" onClick = {()=> this.handleUpdate("zippyshare",list.zippyshare_id,index,list.anime_id,list.size720)} style = {{width : '160px'}}>Update Episode {list.episode}</button>
                </td>
                <td>
                    <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleDelete(index,list.on_going_id)}>Hapus Episode {list.episode}</button>
                </td>
            </tr>
        }):null;

        return (
            <div className = "container-fluid mb-5">
                <div className = "row">
                    <h1 className = "col-12 mt-2 mb-1" style = {{textAlign : 'center'}}>LINK UKURAN VIDIO 720</h1>
                    <h1 className = "bg bg-dark col-12 mt-2 mb-2" style = {{textAlign : 'center'}}>Sekarang Anime "<span className = "text-success">{this.props.name}</span>" Sudah <br/> <span className = "text-danger">Episode {googledrive.length}</span></h1>
                    <table className = "col-8 mx-auto">
                        <tbody>
                            <tr>
                                <td><h4>Tambah Episode : {googledrive.length + 1}</h4></td>
                                <td><input id = {"add_link"} type = "text" className = "form-control" style = {{width : '100%'}} required/></td>
                                <td><button className = "btn btn-primary" onClick = {()=>this.handleAdd(zippyshare.length + 1)} style = {{width : '100%'}}>Tambah Episode</button></td>
                                <td><button  className = "btn btn-danger" style = {{width : '100%'}} onClick = {this.handleCancel}>Bersihkan</button></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Googledrive */}
                    <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
                        <h1>Googledrive</h1>
                        <div className = "row px-2">
                            <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                                <table style = {{width : '100%'}} className = "mt-2 mb-3">
                                    <tbody>
                                        <tr>
                                            <th>Episode</th>
                                            <th>Link</th>
                                            <th>Fitur</th>
                                        </tr>
                                        {viewGoogledrive}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Zippyshare */}
                    <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
                        <h1>Zippyshare</h1>
                        <div className = "row px-2">
                            <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                                <table style = {{width : '100%'}} className = "mt-2 mb-3">
                                    <tbody>
                                        <tr>
                                            <th>Episode</th>
                                            <th>Link</th>
                                            <th>Fitur</th>
                                        </tr>
                                        {viewZippyshare}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className = "col-12 mt-3">
                        <h1 className = "bg bg-warning" style = {{textAlign : 'center'}}>ON GOING ANIME</h1>
                    </div>
                </div>
            </div>
        )
    }
}