import React from 'react'
import {Link} from 'react-router-dom'

const CardSearch = ({index,anime_id,name,image,image_detail,rating,genre}) => {
    const handleEnter = (index) => {
        document.getElementById(index).style.opacity = "0";
        document.getElementById(index).style.transition = "0.5s";
        document.getElementById("hover_search" + index).style.display = "block";
    }

    const handleLeave = (index) => {
        document.getElementById(index).style.opacity = "1";
        document.getElementById(index).style.transition = "1s";
        document.getElementById("hover_search" + index).style.display = "none";
    }

    return (
        <div className="col-sm-6 col-md-4 mt-2 mb-2 px-3" style = {{height : '180px'}}  onMouseEnter = {()=>handleEnter(index)} onMouseLeave = {()=>handleLeave(index)}>
            <Link to = {`/detail_search/${anime_id}/${name}`} style = {{color : 'black',textDecoration : 'none'}} >
                {/* Hover */}
                <div className = "row px-1" style = {{display : 'none',position : 'absolute'}} id = {"hover_search" + index}>
                    <div className = "col-12 px-0">
                        <div className = "row">
                            <div className = "col-9">
                                <img  src = {`http://localhost:5000/images/${image_detail}`} style = {{width : '100%',height : '181px',borderRadius : '5px 0px 0px 5px'}} alt = {image_detail}/>
                            </div>
                            <div className = "col-2 mt-2" style = {{backgroundImage : 'url(../sakura.gif)',backgroundSize : '100% 100%'}}>
                                {/* Japan Text */}
                                <h4 style = {{textAlign : 'center',color : 'red',fontWeight : 'bold'}}>続きを読む</h4>
                                <small style = {{marginLeft : '-25px'}}>Selengkapnya</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row px-1">
                    <div className = "col-12" style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey'}}>
                        {/* Main */}
                        <div className = "row"  id = {index}>
                            <div className = "col-4 px-0">
                                <img  src = {`http://localhost:5000/images/${image}`} style = {{height : '180px',width : '100%',borderRadius : '5px 0px 0px 5px'}} alt = {image}/>
                            </div>
                            <div className = "col-8">
                                <div className = "row" style = {{textAlign : 'left'}}>
                                    {/* Judul */}
                                    <div className = "col-12" style = {{borderBottom : '2px solid black'}}>
                                        <b>{name}</b>
                                    </div>
                                    <div className = "col-12">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Rating</th>
                                                    <td> : </td>
                                                    <td>{rating}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div>
                                            <h6 style = {{textAlign : 'center',borderBottom : '1px solid black',fontWeight : 'bold'}}>Genre</h6>
                                            <i>{genre}</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardSearch
