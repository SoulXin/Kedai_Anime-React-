import React, { Component } from 'react'
import axios from 'axios'

export default class Size360 extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            googledrive : [],
            zippyshare : [],
            googledrive_id : '',
            complete_id : '',
            episode : '',
            size360 : '',
        }
        this.buttonAddGoogledrive = React.createRef();
        this.buttonAddZippyshare = React.createRef();
    }
    componentDidMount(){
        this.buttonAddGoogledrive.current.style.visibility = "hidden";
        this.buttonAddZippyshare.current.style.visibility = "hidden";

        this._isMounted = true;
        if(this._isMounted && this.props.complete_id){
            this.googledrive(this.props.complete_id)
            this.zippyshare(this.props.complete_id)
        }else{
            console.log("Loading Take a data")
        }
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    googledrive(complete_id){
        axios({
            method : 'GET',
            url : `http://localhost:5000/googledrive/check_googledrive/${complete_id}`,
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

    zippyshare(complete_id){
        axios({
            method : 'GET',
            url : `http://localhost:5000/zippyshare/check_zippyshare/${complete_id}`,
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

    handleAdd = (store,episode) => {
        var complete_id = this.props.complete_id;

        if(store === "googledrive"){
            this.buttonAddGoogledrive.current.style.visibility = "hidden";
            var googledrive_input = document.getElementById("add_googledrive").value;
            
            const data = {
                size360 : googledrive_input,
                episode : episode
            }
            axios({
                method : 'POST',
                url : `http://localhost:5000/googledrive/add_googledrive/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                var data_temp = this.state.googledrive;
                data_temp.push(response.data)
    
                this.setState({
                    googledrive : data_temp
                })
                document.getElementById("add_googledrive").value = "";
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zippyshare"){
            this.buttonAddZippyshare.current.style.visibility = "hidden";
            var zippyshare_input = document.getElementById("add_zippyshare").value;
            
            const data = {
                size360 : zippyshare_input,
                episode : episode
            }
            axios({
                method : 'POST',
                url : `http://localhost:5000/zippyshare/add_zippyshare/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                var data_temp = this.state.zippyshare;
                data_temp.push(response.data)
    
                this.setState({
                    zippyshare : data_temp
                })
                document.getElementById("add_zippyshare").value = ""
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    handleUpdate = (store,id,index,complete_id,link) => {
        if(store === "googledrive"){
            var input_googledrive = document.getElementById("googledrive" + index).value;
            const data = {
                size360 : input_googledrive,
                link360 : link,
                complete_id : complete_id
            }
            axios({
                method : 'PUT',
                url : `http://localhost:5000/googledrive/update_googledrive/${id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                console.log(response.data)
                this.setState({
                    googledrive : response.data
                })
                alert(`Data Episode ${index + 1} Untuk GOOGLEDRIVE - 360 Sudah DiPerbarui`)
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zippyshare"){
            var input_zippyshare = document.getElementById("zippyshare" + index).value;
            const data = {
                size360 : input_zippyshare,
                link360 : link,
                complete_id : complete_id
            }
            axios({
                method : 'PUT',
                url : `http://localhost:5000/zippyshare/update_zippyshare/${id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                console.log(response.data)
                this.setState({
                    zippyshare : response.data
                })
                alert(`Data Episode ${index + 1} Untuk ZIPPYSHARE - 360 Sudah DiPerbarui`)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    handleDelete = (store,id,index) => {
        if(store === "googledrive"){
            axios({
                method : 'DELETE',
                url : `http://localhost:5000/googledrive/delete_googledrive/${id}`,
                cancelToken : this.source.token
            })
            .then(response => {
                var data_temp = this.state.googledrive;
                data_temp.splice(index,1)
    
                this.setState({
                    googledrive : data_temp
                })
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zippyshare"){
            axios({
                method : 'DELETE',
                url : `http://localhost:5000/zippyshare/delete_zippyshare/${id}`,
                cancelToken : this.source.token
            })
            .then(response => {
                var data_temp = this.state.zippyshare;
                data_temp.splice(index,1)
    
                this.setState({
                    zippyshare : data_temp
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    handleShow = (store) => {
        if(store === "googledrive"){
            this.buttonAddGoogledrive.current.style.visibility = "visible";
        }else if(store === "zippyshare"){
            this.buttonAddZippyshare.current.style.visibility = "visible";
        }
    }

    handleCancel = (store) => {
        if(store === "googledrive"){
            this.buttonAddGoogledrive.current.style.visibility = "hidden";
        }else if(store === "zippyshare"){
            this.buttonAddZippyshare.current.style.visibility = "hidden";
        }
    }

    render() {
        const {googledrive,zippyshare} = this.state;
        const viewGoogledrive = this.state.googledrive ? 
        googledrive.map((list,index) => {
            return <tr key = {index}>
                <td>{list.episode}</td>
                <td>
                    <input id = {"googledrive" + index} className = "form-control" type = "text" defaultValue = {list.size360} style = {{width : '100%'}}/>
                </td>
                <td>
                    <button className = "btn btn-primary" onClick = {()=> this.handleUpdate("googledrive",list.googledrive_id,index,list.complete_id,list.size360)} style = {{width : '160px'}}>Update Episode {list.episode}</button>
                </td>
                <td>
                    <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleDelete("googledrive",list.googledrive_id,index)}>Hapus Episode {list.episode}</button>
                </td>
            </tr>
        }) : null;

        const viewZippyshare = this.state.zippyshare ? 
        zippyshare.map((list,index) => {
            return <tr key = {index}>
                <td>{list.episode}</td>
                <td>
                    <input id = {"zippyshare" + index} className = "form-control" type = "text" defaultValue = {list.size360} style = {{width : '100%'}}/>
                </td>
                <td>
                    <button className = "btn btn-primary" onClick = {()=> this.handleUpdate("zippyshare",list.zippyshare_id,index,list.complete_id,list.size360)} style = {{width : '160px'}}>Update Episode {list.episode}</button>
                </td>
                <td>
                    <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleDelete("zippyshare",list.zippyshare_id,index)}>Hapus Episode {list.episode}</button>
                </td>
            </tr>
        }):null;

        return (
            <div className = "container-fluid mb-5">
                <div className = "row">
                    <h1 className = "col-12 mt-2 mb-1" style = {{textAlign : 'center'}}>LINK UKURAN VIDIO 360</h1>
                    {/* Googledrive */}
                    <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
                        <h1>Googledrive</h1>
                        <div className = "row px-2">
                            <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                                <table style = {{width : '100%'}}>
                                    <tbody>
                                        <tr>
                                            <th>Episode</th>
                                            <th>Link</th>
                                            <th>Fitur</th>
                                        </tr>
                                        {viewGoogledrive}
                                        <tr ref = {this.buttonAddGoogledrive}>
                                            <td>{googledrive.length + 1}</td>
                                            <td>
                                                <input id = "add_googledrive" className = "form-control" defaultValue = "" type = "text" style = {{width : '100%'}} required/>
                                            </td>
                                            <td>
                                                <button className = "btn btn-primary" onClick = {()=>this.handleAdd("googledrive",googledrive.length + 1)} style = {{width : '160px'}}>Tambah Episode</button>
                                            </td>
                                            <td>
                                                <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleCancel("googledrive")}>Batal</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className = "btn btn-primary mt-1 mb-1" onClick = {()=>this.handleShow("googledrive")}>Tambah Link Googledrive versi 360</button>
                            </div>
                        </div>
                    </div>

                    {/* Zippyshare */}
                    <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
                        <h1>Zippyshare</h1>
                        <div className = "row px-2">
                            <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                                <table style = {{width : '100%'}}>
                                    <tbody>
                                        <tr>
                                            <th>Episode</th>
                                            <th>Link</th>
                                            <th>Fitur</th>
                                        </tr>
                                        {viewZippyshare}
                                        <tr ref = {this.buttonAddZippyshare}>
                                            <td>{zippyshare.length + 1}</td>
                                            <td>
                                                <input id = "add_zippyshare" defaultValue = "" type = "text" style = {{width : '100%'}} required/>
                                            </td>
                                            <td>
                                                <button className = "btn btn-primary" onClick = {()=>this.handleAdd("zippyshare",zippyshare.length + 1)} style = {{width : '160px'}}>Tambah Episode</button>
                                            </td>
                                            <td>
                                                <button className = "btn btn-danger" style = {{width : '160px'}} onClick = {()=> this.handleCancel("zippyshare")}>Batal</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className = "btn btn-primary mt-1 mb-1" onClick = {()=>this.handleShow("zippyshare")}>Tambah Link Zippyshare versi 360</button>
                            </div>
                        </div>
                    </div>
                    <div className = "col-12 mt-3">
                        <h1  className = "bg bg-success" style = {{textAlign : 'center'}}>COMPLETE ANIME</h1>
                    </div>
                </div>
            </div>
        )
    }
}