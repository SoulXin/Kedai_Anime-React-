import React, { Component } from 'react'
import axios from 'axios'

export default class Size240 extends Component {
    source = axios.CancelToken.source();
    _isMounted = false;

    constructor(props){
        super(props)

        this.state = {
            batch : ''
        }
    }
    componentDidMount(){
        this._isMounted = true;
        if(this._isMounted  && this.props.complete_id){
            this.batch(this.props.complete_id)
        }
    }

    componentWillUnmount(){
        this.source.cancel();
        this._isMounted = false;
    }

    batch(complete_id){
        axios({
            method : 'GET',
            url : `http://localhost:5000/batch/check_batch/${complete_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                batch : response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleUpdate = (store,link) => {
        var complete_id = this.props.complete_id;
        console.log(link)
        if(store === "gd240"){
            var gd_size240 = document.getElementById("gd_size240").value;
            const data = {
                gd_size240 : gd_size240,
                gd_link240 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch GOOGLEDRIVE - 240 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "gd360"){
            var gd_size360 = document.getElementById("gd_size360").value;
            const data = {
                gd_size360 : gd_size360,
                gd_link360 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch GOOGLEDRIVE - 360 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "gd480"){
            var gd_size480 = document.getElementById("gd_size480").value;
            const data = {
                gd_size480 : gd_size480,
                gd_link480 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch GOOGLEDRIVE - 480 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "gd720"){
            var gd_size720 = document.getElementById("gd_size720").value;
            const data = {
                gd_size720 : gd_size720,
                gd_link720 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch GOOGLEDRIVE - 720 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zs240"){
            var zs_size240 = document.getElementById("zs_size240").value;
            const data = {
                zs_size240 : zs_size240,
                zs_link240 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch ZIPPYSHARE - 240 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zs360"){
            var zs_size360 = document.getElementById("zs_size360").value;
            const data = {
                zs_size360 : zs_size360,
                zs_link360 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch ZIPPYSHARE - 360 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zs480"){
            var zs_size480 = document.getElementById("zs_size480").value;
            const data = {
                zs_size480 : zs_size480,
                zs_link480 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch ZIPPYSHARE - 480 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }else if(store === "zs720"){
            var zs_size720 = document.getElementById("zs_size720").value;
            const data = {
                zs_size720 : zs_size720,
                zs_link720 : link
            }

            axios({
                method : 'PUT',
                url : `http://localhost:5000/batch/update_batch/${complete_id}`,
                data : data,
                cancelToken : this.source.token
            })
            .then(response => {
                this.setState({
                    batch : response.data
                })
                alert("Link Batch ZIPPYSHARE - 720 Berhasil di Update")
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    handleAdd = () => {
        var complete_id = this.props.complete_id;
        axios({
            method : 'POST',
            url : `http://localhost:5000/batch/add_batch/${complete_id}`,
            cancelToken : this.source.token
        })
        .then(response => {
            this.setState({
                batch : response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const viewGoogledrive = this.state.batch ? <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
            <h1>Googledrive (Batch)</h1>
            <div className = "row px-2">
                <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                    <table cellPadding = "5" style = {{width : '100%'}} className = "mt-1 mb-2">
                        <tbody>
                            <tr>
                                <th>Episode</th>
                                <th>Link</th>
                            </tr>
                            {/* Googledrive 240 */}
                            <tr  style = {{width : '100%'}}>
                                <td>240</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "gd_size240" defaultValue = {this.state.batch ? this.state.batch.gd_size240 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("gd240",this.state.batch.gd_size240)}>Update 240</button>
                                </td>
                            </tr>

                            {/* Googledrive 360 */}
                            <tr  style = {{width : '100%'}}>
                                <td>360</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "gd_size360" defaultValue = {this.state.batch ? this.state.batch.gd_size360 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("gd360",this.state.batch.gd_size360)}>Update 360</button>
                                </td>
                            </tr>

                            {/* Googledrive 480 */}
                            <tr  style = {{width : '100%'}}>
                                <td>480</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "gd_size480" defaultValue = {this.state.batch ? this.state.batch.gd_size480 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("gd480",this.state.batch.gd_size480)}>Update 480</button>
                                </td>
                            </tr>

                            {/* Googledrive 720 */}
                            <tr  style = {{width : '100%'}}>
                                <td>720</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "gd_size720" defaultValue = {this.state.batch ? this.state.batch.gd_size720 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("gd720",this.state.batch.gd_size720)}>Update 720</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> : null;

        const viewZippyshare = this.state.batch ? <div className = "col-6 mt-2" style = {{textAlign : 'center'}}>
            <h1>Zippyshare (Batch)</h1>
            <div className = "row px-2">
                <div className = "col-12 px-0"  style = {{border : '1px solid black',borderRadius : '5px'}}>
                    <table cellPadding = "5" style = {{width : '100%'}} className = "mt-1 mb-2">
                        <tbody>
                            <tr>
                                <th>Episode</th>
                                <th>Link</th>
                            </tr>
                            {/* Zippyshare 240 */}
                            <tr  style = {{width : '100%'}}>
                                <td>240</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "zs_size240" defaultValue = {this.state.batch ? this.state.batch.zs_size240 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("zs240",this.state.batch.zs_size240)}>Update 240</button>
                                </td>
                            </tr>

                            {/* Zippyshare 360 */}
                            <tr  style = {{width : '100%'}}>
                                <td>360</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "zs_size360" defaultValue = {this.state.batch ? this.state.batch.zs_size360 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("zs360",this.state.batch.zs_size360)}>Update 360</button>
                                </td>
                            </tr>

                            {/* Zippyshare 480 */}
                            <tr  style = {{width : '100%'}}>
                                <td>480</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "zs_size480" defaultValue = {this.state.batch ? this.state.batch.zs_size480 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button" onClick = {() => this.handleUpdate("zs480",this.state.batch.zs_size480)}>Update 480</button>
                                </td>
                            </tr>

                            {/* Zippyshare 720 */}
                            <tr  style = {{width : '100%'}}>
                                <td>720</td>
                                <td>
                                    <input type = "text" className = "form-control" id = "zs_size720" defaultValue = {this.state.batch ? this.state.batch.zs_size720 : null}></input>
                                </td>
                                <td>
                                    <button className = "btn btn-outline-primary" type = "button"  onClick = {() => this.handleUpdate("zs720",this.state.batch.zs_size720)}>Update 720</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> : null;
            
        return (
            <div className = "container-fluid mb-5">
                <div className = "row">
                    <div className = "col-12 mt-2 mb-1" style = {{textAlign : 'center'}}>
                        <h1 >LINK UKURAN VIDIO BATCH</h1>
                        <h3>Status : {this.state.batch ? "Sudah ada" : "Belum ada" }</h3>
                        {
                            this.state.batch ? null : <button className = "btn btn-primary" onClick = {this.handleAdd}>Tambah Batch</button>
                        }
                    </div>
                    {/* BATCH Googledrive*/}
                    {viewGoogledrive}

                    {/* BATCH Zippyshare*/}
                    {viewZippyshare}
                    <div className = "col-12 mt-3">
                        <h1  className = "bg bg-success" style = {{textAlign : 'center'}}>COMPLETE ANIME</h1>
                    </div>
                </div>
            </div>
        )
    }
}