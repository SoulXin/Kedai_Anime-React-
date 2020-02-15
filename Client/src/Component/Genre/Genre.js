import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import MediaQuery from 'react-responsive'
import './Scrollbar.css';

const Genre = () => {
    const background = useSelector(state => state.header.background)
    var genre = ["Action",
                "Romance",
                "Comedy",
                "Adventure",
                "Drama",
                "Slice Of Life",
                "Fantasy",
                "Supernatural",
                "Horor",
                "Mystery",
                "Psychological",
                "Sci Fi",
                "Mecha",
                "Harem",
                "Reverse Harem",
                "Isekai",
                "Reverse Isekai",
                "Demons",
                "Game",
                "Ecchi",
                "Historical",
                "Kids",
                "Martial Art",
                "Josei",
                "Cyberpunk",
                "Post Apocalyptic",
                "Police",
                "Parody",
                "Music",
                "School",
                "Super Power",
                "Space",
                "Shounen",
                "Shoujo",
                "Seinen",
                "Sports",
                "Tragedy",
                "Vampire",
                "Yaoi",
                "Yuri",
                "Magic",
                "Military"
            ];
    const mapGenre = genre.map((list,index) => {
        return  <Link to = {`/genre/${list.toLowerCase()}`}  key = {index} className = "col-6 px-1 mt-1 mb-1">
                    <button className = "btn btn-outline-danger" style = {{width : '100%'}}>
                        <small>{list}</small>
                    </button>
                </Link>
    })
    return (
        <React.Fragment>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className = "container" style = {background ? {height : '300px',background : 'black',borderRadius : '0px 0px 5px 5px',overflowY : 'scroll'} : {height : '300px',background : 'white',borderRadius : '0px 0px 5px 5px',overflowY : 'scroll'}} id ="style-2">
                    <div className = "row mt-2">
                        {mapGenre}
                    </div>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "col-11 mx-auto mb-2" style = {background ? {background : 'black',borderRadius : '5px',marginTop : '70px'} : {background : 'white',borderRadius : '5px',marginTop : '70px'}}>
                    <div className = "row mt-2">
                        <div className = "col-12"  style = {{padding : '10px',background : 'white',borderRadius : '5px 5px 0px 0px',backgroundImage : 'url("../../maxdefault.jpg")',backgroundSize : 'cover',backgroundPosition : 'top',backgroundRepeat : 'no-repeat'}}>
                            <h5 style = {background ? {color : 'red'} : {color : 'pink'}}>Genre Anime</h5>
                        </div>
                        {mapGenre}
                    </div>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery maxWidth = {767}>
                <div className = "col-11 mx-auto mb-2" style = {background ? {background : 'black',borderRadius : '5px',marginTop : '70px'} : {background : 'white',borderRadius : '5px',marginTop : '70px'}}>
                    <div className = "row mt-2">
                        <div className = "col-12"  style = {{padding : '10px',background : 'white',borderRadius : '5px 5px 0px 0px',backgroundImage : 'url("../../maxdefault.jpg")',backgroundSize : 'cover',backgroundPosition : 'top',backgroundRepeat : 'no-repeat'}}>
                            <h5 style = {background ? {color : 'red'} : {color : 'pink'}}>Genre Anime</h5>
                        </div>
                        {mapGenre}
                    </div>
                </div>
            </MediaQuery>
        </React.Fragment>

    )
}

export default Genre