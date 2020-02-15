import React from 'react'
import Genre from '../../Genre/Genre'
import MediaQuery from 'react-responsive'
import axios from 'axios'

const DetailOnGoing = ({image_detail,name,description,rating,studio,genre,on_going_googledrive,on_going_zippyshare}) => {

    const handleLink = (link) => {
        axios({
            method : 'GET',
            url : `http://localhost:5000/download/check_download/${link}`
        })
        .then(response => {
            window.open(`http://google.com/${response.data.unique_string}`, "_blank")
        })
        .catch(error => {
            console.log(error)
        })
    }

    // 240
    const viewGoogledrive240 = on_going_googledrive.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size240)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size240)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size240)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size240)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>

    })
    const viewZippyshare240 = on_going_zippyshare.map((list,index) => {
        return  <React.Fragment key = {index}> 
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size240)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size240)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size240)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size240)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })

    // 360
    const viewGoogledrive360 = on_going_googledrive.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size360)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size360)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size360)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size360)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })
    const viewZippyshare360 = on_going_zippyshare.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size360)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size360)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size360)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size360)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })

    // 480
    const viewGoogledrive480 = on_going_googledrive.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size480)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size480)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size480)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size480)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })
    const viewZippyshare480 = on_going_zippyshare.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size480)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size480)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size480)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size480)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })

    // 720
    const viewGoogledrive720 = on_going_googledrive.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size720)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size720)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size720)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size720)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })
    const viewZippyshare720 = on_going_zippyshare.map((list,index) => {
        return  <React.Fragment key = {index}>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "px-3 btn btn-primary mt-1 mb-1" onClick = {()=> handleLink(list.size720)}>Episode {list.episode}</button>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-2 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-3" onClick = {()=> handleLink(list.size720)}>Episode {list.episode} </button>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-2" onClick = {()=> handleLink(list.size720)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "col-3 px-0" key = {index}>
                    <button className = "btn btn-primary mt-1 mb-1 px-0" onClick = {()=> handleLink(list.size720)}><small>Episode {list.episode}</small> </button>
                </div>
            </MediaQuery>
        </React.Fragment>
    })

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
                                    <img src = {image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '450px',borderRadius : '10px'}}/>
                                </div>
                                
                                {/* Title + Episode */}
                                <div className = "col-11 mx-auto mt-3">
                                    <h4>{name}</h4>
                                    <h5>Status : On Going</h5>
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

                                {/* Download 240 */}
                                <div className = "col-12">
                                    <div className = "row mt-5 px-3">
                                    <div className = "col-12">
                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                            <h4 className = "col-12">240p</h4>
                                            {/* GoogleDrive */}
                                            <div className = "col-12 px-4">
                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                    <h4 className = "col-1 mt-4">GD</h4>
                                                    <div className = "col-11">
                                                        <div className = "row">
                                                            {viewGoogledrive240}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Zippyshare */}
                                            <div className = "col-12 px-4">
                                                <div className = "row">
                                                    <h4 className = "col-1 mt-4">ZS</h4>
                                                    <div className = "col-11">
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

                                {/* Download 360 */}
                                <div className = "col-12">
                                    <div className = "row mt-5 px-3">
                                    <div className = "col-12">
                                        <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                            <h4 className = "col-12">360p</h4>
                                            {/* GoogleDrive */}
                                            <div className = "col-12 px-4">
                                                <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                    <h4 className = "col-1 mt-4">GD</h4>
                                                    <div className = "col-11">
                                                        <div className = "row">
                                                            {viewGoogledrive360}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Zippyshare */}
                                            <div className = "col-12 px-4">
                                                <div className = "row">
                                                    <h4 className = "col-1 mt-4">ZS</h4>
                                                    <div className = "col-11">
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

                                {/* Download 480 */}
                                <div className = "col-12">
                                    <div className = "row mt-5 px-3">
                                        <div className = "col-12">
                                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                <h4 className = "col-12">480p</h4>
                                                {/* GoogleDrive */}
                                                <div className = "col-12 px-4">
                                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                        <h4 className = "col-1 mt-4">GD</h4>
                                                        <div className = "col-11">
                                                            <div className = "row">
                                                                {viewGoogledrive480}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Zippyshare */}
                                                <div className = "col-12 px-4">
                                                    <div className = "row">
                                                        <h4 className = "col-1 mt-4">ZS</h4>
                                                        <div className = "col-11">
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

                                {/* Download 720 */}
                                <div className = "col-12">
                                    <div className = "row mt-5 px-3">
                                        <div className = "col-12">
                                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                                <h4 className = "col-12">720p</h4>
                                                {/* GoogleDrive */}
                                                <div className = "col-12 px-4">
                                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                                        <h4 className = "col-1 mt-4">GD</h4>
                                                        <div className = "col-11">
                                                            <div className = "row">
                                                                {viewGoogledrive720}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Zippyshare */}
                                                <div className = "col-12 px-4">
                                                    <div className = "row">
                                                        <h4 className = "col-1 mt-4">ZS</h4>
                                                        <div className = "col-11">
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
                            <img src = {image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '400px',borderRadius : '10px'}}/>
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

                    {/* Download 240 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 240p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 360 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 360p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 480 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 480p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 720 */}
                    <div className = "row mt-5 mb-5 px-0">
                        <div className = "col-12">
                            <div className = "row"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 720p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery maxWidth = {767}>
                <div className = "col-11 mx-auto mt-5">
                    <div className = "row">
                        <div className = "col-12 px-0 mt-3">
                            <img src = {image_detail ? `http://localhost:5000/images/${image_detail}` : null} alt = {image_detail} style = {{width : '100%',height : '200px',borderRadius : '10px'}}/>
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

                    {/* Download 240 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row px-0"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 240p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 360 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row px-0"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 360p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 480 */}
                    <div className = "row mt-5 px-0">
                        <div className = "col-12">
                            <div className = "row px-0"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 480p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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

                    {/* Download 720 */}
                    <div className = "row mt-5 mb-5 px-0">
                        <div className = "col-12">
                            <div className = "row px-0"  style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey',padding : '10px'}}>
                                <h4 className = "col-12">Resolusi : 720p</h4>
                                {/* GoogleDrive */}
                                <div className = "col-12 px-4">
                                    <div className = "row"  style = {{borderBottom : "1px solid black"}}>
                                        <h4 className = "mt-4 mx-auto">Googledrive</h4>
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
                                        <h4 className = "mt-4 mx-auto">Zippyshare</h4>
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
            </MediaQuery>
        </React.Fragment>

    )
}

export default DetailOnGoing