import React, { Component } from 'react'
import MainAnimeongoing from '../AnimeOnGoing/Main_Animeongoing/MainAnimeongoing'
import MainAnimecomplete from '../AnimeComplete/Main_Animecomplete/MainAnimecomplete'
import Genre from '../Genre/Genre'
import MediaQuery from 'react-responsive'

export default class Main extends Component {
    render() {
        return (
            <div className = "container mt-5 mb-5">
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <div className = "row">
                        <div className = "col-9 px-4">
                            <div className = "row">
                                <MainAnimeongoing/>
                                <MainAnimecomplete/>
                            </div>
                        </div>

                        <div className = "col-3 px-3 mt-5">
                            <div className = "row" style = {{borderRadius : '5px'}}>
                                {/* PC */}
                                    <div className = "col-12"  style = {{padding : '10px',background : 'white',borderRadius : '5px 5px 0px 0px',backgroundImage : 'url("/maxdefault.jpg")',backgroundSize : 'cover',backgroundPosition : 'top',backgroundRepeat : 'no-repeat'}}>
                                        <h5 style = {{color : 'pink'}}>Genre Anime</h5>
                                    </div>
                                    <div className = "col-12 px-0">
                                        <Genre/>
                                    </div>  
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                {/* Tablet */}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <div className = "row">
                        <div className = "col-12 px-4">
                            <div className = "row">
                                <MainAnimeongoing/>
                                <MainAnimecomplete/>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery maxWidth = {767}>
                    <div className = "row">
                        <div className = "col-12 px-4">
                            <div className = "row">
                                <MainAnimeongoing/>
                                <MainAnimecomplete/>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}
