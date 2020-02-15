import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import OnGoingAnime from '../OnGoingAnime/Main/OnGoingAnime'
import CompleteAnime from '../CompleteAnime/Main/CompleteAnime'

export default class Main extends Component {
    render() {
        return (
            <div className = "container" style = {{marginTop : '70px'}}>
                <div className = "row">
                    <div className = "col-3">
                        <Link to = "/on_going_anime" className = "col-12">
                            <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}}>Cek On Going Anime</button>
                        </Link>

                        <Link to = "/complete_anime" className = "col-12">
                            <button className = "btn btn-primary  mt-1 mb-1" style = {{width : '100%'}}>Cek Complete Anime</button>
                        </Link>

                        <Link to = "/add_anime" className = "col-12">
                            <button className = "btn btn-primary mt-1 mb-1" style = {{width : '100%'}}>Add Anime</button> 
                        </Link>
                    </div>

                    <div className = "col-9">
                        <OnGoingAnime/>
                        <CompleteAnime/>
                    </div>
                </div>
            </div>
        )
    }
}
