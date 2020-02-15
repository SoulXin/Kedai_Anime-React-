import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faVideo, faBuilding} from '@fortawesome/free-solid-svg-icons'
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function CardAnime({index,link,anime_id,name,image_detail,image,rating,genre,studio,gridDesktop,gridTab,gridHandphone,id,id_hover,complete,episode}) {
    const background = useSelector(state => state.header.background)
    const handleEnter = (index) => {
        document.getElementById(id + index).style.opacity = "0";
        document.getElementById(id +  index).style.transition = "0.5s";
        document.getElementById(id_hover + index).style.display = "block";
    }

    const handleLeave = (index) => {
        document.getElementById(id + index).style.opacity = "1";
        document.getElementById(id + index).style.transition = "1s";
        document.getElementById(id_hover + index).style.display = "none";
    }

    var checkStatus = function(episode) {
        if (!episode) {
            return <React.Fragment>
                <MediaQuery minWidth = {992}>
                    <small className = {complete ? "col-5 text-success" : "col-6 text-warning"} style = {{fontSize : '15px',marginLeft : '-10px'}}>{complete ? "Complete" : "On Going"}</small>
                </MediaQuery>
                <MediaQuery minWidth = {360} maxWidth = {991}>
                    <small className = {complete ? "col-5 text-success" : "col-6 text-warning"} style = {{fontSize : '15px',marginLeft : '-10px'}}>{complete ? "Complete" : "On Going"}</small>
                </MediaQuery>

                <MediaQuery minWidth = {320} maxWidth = {359}>
                    <small className = {complete ? "col-5 text-success" : "col-6 text-warning"} style = {{fontSize : '13px',marginLeft : '-10px'}}>{complete ? "Complete" : "On Going"}</small>
                </MediaQuery>
            </React.Fragment>
        } else if(episode >= 1) {
            return <React.Fragment>
                <MediaQuery minWidth = {992}>
                    <small className = "col-6" style = {{fontSize : '15px',marginLeft : '-10px'}}>Episode {episode}</small>
                </MediaQuery>
                <MediaQuery minWidth = {360} maxWidth = {991}>
                    <small className = "col-6" style = {{fontSize : '15px',marginLeft : '-10px'}}>Episode {episode}</small>
                </MediaQuery>

                <MediaQuery minWidth = {320} maxWidth = {359}>
                    <small className = "col-6" style = {{fontSize : '12px',marginLeft : '-12px'}}>Episode {episode}</small>
                </MediaQuery>
            </React.Fragment>
        }
    }

    return (
        <React.Fragment>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div key = {index} className = {gridDesktop} style = {{height : '180px'}}>
                    <Link to = {link} style = {{color : 'black',textDecoration : 'none'}}>
                        {/* Hover */}
                        <div className = "row px-1" style = {{display : 'none',position : 'absolute'}} id = {id_hover + index}>
                            <div className = "col-12 px-0">
                                <div className = "row">
                                    <div className = "col-9">
                                        <img  src = {`http://localhost:5000/images/${image_detail}`} style = {{width : '100%',height : '181px',borderRadius : '5px 0px 0px 5px'}} alt = {image_detail}/>
                                    </div>
                                    <div className = "col-2 mt-2" style = {{backgroundImage : 'url(../sakura.gif)',backgroundSize : '100% 100%'}}>
                                        {/* Japan Text */}
                                        <h4 style = {{textAlign : 'center',color : 'red',fontWeight : 'bold'}}>続きを読む</h4>
                                        <small style = {background ? {marginLeft : '-23px',color : 'red'} : {marginLeft : '-23px',color : 'black'}}>Selengkapnya</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row px-1" onMouseEnter = {()=>handleEnter(index)} onMouseLeave = {()=>handleLeave(index)}>
                            <div className = "col-12" style = {{border : '1px solid grey',borderRadius : '5px',boxShadow : '2px 2px 5px grey'}}>
                                {/* Main */}
                                <div className = "row"  id = {id + index}>
                                    <div className = "col-4 px-0">
                                        <img  src = {`http://localhost:5000/images/${image}`} style = {{height : '180px',width : '100%',borderRadius : '5px 0px 0px 5px'}} alt = {image}/>
                                    </div>
                                    <div className = "col-8" style = {background ? {color : 'pink'} : {color : 'black'}}>
                                        <div className = "row" style = {{textAlign : 'left'}}>
                                            {/* Judul */}
                                            <div className = "col-12" style = {background ? {borderBottom : '2px solid pink'} : {borderBottom : '2px solid black'}}>
                                                <b>{name}</b>
                                            </div>
                                            <div className = "col-12">
                                                {
                                                    complete ? 
                                                    <div className = "col-12 px-0">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    {/* Rating */}
                                                                    <td style = {{color : 'yellow'}}>
                                                                        <FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td>{rating}</td>

                                                                    {/* Studio */}
                                                                    <td>
                                                                        <FontAwesomeIcon  icon={faBuilding} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td>{studio}</td>
                                                                </tr>

                                                                <tr>
                                                                    {/* Status Epi */}
                                                                    <td>
                                                                        <FontAwesomeIcon  icon={faVideo} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td className = "text-success">{checkStatus(episode)}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    :
                                                    <div className = "col-12 px-0">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    {/* Rating */}
                                                                    <td style = {{color : 'yellow'}}>
                                                                        <FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td>{rating}</td>

                                                                    {/* Studio */}
                                                                    <td>
                                                                        <FontAwesomeIcon  icon={faBuilding} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td>{studio}</td>
                                                                </tr>

                                                                <tr>
                                                                    {/* Status Epi */}
                                                                    <td>
                                                                        <FontAwesomeIcon  icon={faVideo} ></FontAwesomeIcon>
                                                                    </td>
                                                                    <td>{checkStatus(episode)}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                }
                                                <div className = "col-12 px-0">
                                                    <h6 style = {background ? {textAlign : 'center',borderBottom : '1px solid pink',fontWeight : 'bold'} : {textAlign : 'center',borderBottom : '1px solid black',fontWeight : 'bold'}}>Genre</h6>
                                                    <i>{genre.substring(0,40) + "..." }</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div key = {index} className = {gridTab} style = {{height : '180px',marginTop : '27px',marginBottom : '27px'}}>
                    <Link to = {link} style = {{color : 'black',textDecoration : 'none'}}>
                        <div className = "col-12 px-0" style = {background ? {color : 'white',border : '1px solid white',borderRadius : '5px'} : {color : 'black',border : '1px solid black',borderRadius : '5px'}}>
                            <img  src = {`http://localhost:5000/images/${image}`} style = {{height : '180px',width : '100%',borderRadius : '5px'}} alt = {image}/>
                            <div className = "row">
                                <small className = "col-12" style = {{textAlign : 'center',fontWeight : 'bold'}}>{name.substring(0,16) + "..." }</small>
                                <div className = "col-1 ml-2" style = {{color : 'yellow'}}>
                                    <FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
                                </div>
                                <small className = "col-1" style = {{fontSize : '17px',marginLeft : '-8px'}}>{rating}</small>
                                <div className = "offset-1">
                                    <FontAwesomeIcon  icon={faVideo} ></FontAwesomeIcon>
                                </div>
                                {checkStatus(episode)}
                            </div>
                        </div>
                    </Link>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div key = {index} className = {gridHandphone} style = {{height : '180px',marginTop : '28px',marginBottom : '28px'}}>
                    <Link to = {link} style = {{color : 'black',textDecoration : 'none'}}>
                        <div className = "col-12 px-0" style = {background ? {color : 'white',border : '1px solid white',borderRadius : '5px'} : {color : 'black',border : '1px solid black',borderRadius : '5px'}}>
                            <img  src = {`http://localhost:5000/images/${image}`} style = {{height : '180px',width : '100%',borderRadius : '5px'}} alt = {image}/>
                            <div className = "row mt-1">
                                <small className = "col-12" style = {{textAlign : 'center',fontWeight : 'bold'}}>{name.substring(0,16) + "..." }</small>
                                <div className = "col-1 ml-2" style = {{color : 'yellow'}}>
                                    <FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
                                </div>
                                <small className = "col-1" style = {{fontSize : '17px',marginLeft : '-8px'}}>{rating}</small>
                                <div className = "offset-1">
                                    <FontAwesomeIcon  icon={faVideo} ></FontAwesomeIcon>
                                </div>
                                {checkStatus(episode)}
                            </div>
                        </div>
                    </Link>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div key = {index} className = {gridHandphone} style = {{height : '180px',marginTop : '28px',marginBottom : '28px'}}>
                    <Link to = {link} style = {{color : 'black',textDecoration : 'none'}}>
                        <div className = "col-12 px-0" style = {background ? {color : 'white',border : '1px solid white',borderRadius : '5px'} : {color : 'black',border : '1px solid black',borderRadius : '5px'}}>
                            <img  src = {`http://localhost:5000/images/${image}`} style = {{height : '180px',width : '100%',borderRadius : '5px'}} alt = {image}/>
                            <div className = "row mt-1 mb-1">
                                <small className = "col-12" style = {{textAlign : 'center',fontWeight : 'bold'}}>{name.substring(0,16) + "..." }</small>
                                <div className = "col-1 ml-2" style = {{color : 'yellow',fontSize : '13px'}}>
                                    <FontAwesomeIcon  icon={faStar} ></FontAwesomeIcon>
                                </div>
                                <small className = "col-1" style = {{fontSize : '13px',marginLeft : '-8px'}}>{rating}</small>
                                <div className = "offset-1" style = {{fontSize : '13px'}}>
                                    <FontAwesomeIcon  icon={faVideo} ></FontAwesomeIcon>
                                </div>
                                {checkStatus(episode)}
                            </div>
                        </div>
                    </Link>
                </div>
            </MediaQuery>
        </React.Fragment>
    )
}