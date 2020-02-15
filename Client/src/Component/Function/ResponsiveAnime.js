import React from 'react'
import MediaQuery from 'react-responsive'
import Pagination from '../Pagination/Pagination'
export default function ResponsiveAnime({currentData, currentPage, totalPages,totalData,background,genre,title,onPageChanged}) {
    var checkTitle = function(title) {
        if (title === "Complete") {
            return <h4 className = "col-12" style = {{backgroundColor : 'green',borderRadius : '15px 15px 0px 0px',padding : '10px'}}>Complete Anime</h4>
        } else if(title === "OnGoing") {
            return <h4 className = "col-12" style = {{backgroundColor : 'yellow',borderRadius : '15px 15px 0px 0px',padding : '10px'}}>On Going Anime</h4>
        } else if(genre){
            return <h4 className = "col-12" style = {{backgroundColor : 'yellow',borderRadius : '15px 15px 0px 0px',padding : '10px'}}>Genre : {genre}</h4>
        }else {
            return <h4 className = "col-12" style = {{backgroundColor : 'yellow',borderRadius : '15px 15px 0px 0px',padding : '10px'}}>{title}</h4>
        }
    }
    return (
        <React.Fragment>
            {/* PC */}
            <MediaQuery minWidth = {992}>
                <div className="container" style = {background ? {backgroundColor : 'black',borderRadius : '15px',marginTop : '100px',marginBottom : '50px'} : {backgroundColor : 'white',borderRadius : '15px',marginTop : '100px',marginBottom : '50px'}}>
                    <div className = "row">
                        {checkTitle(title)}
                    </div>
                    <div className="row">
                        {currentData}
                    </div>
                    <div className = "row">
                        <div className = "mx-auto">
                            { currentPage && (
                                <span className="current-page d-inline-block pl-4 text-danger h4">
                                Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                                </span>
                            ) }
                            <Pagination totalRecords={totalData} pageLimit={9} pageNeighbours={1} onPageChanged={onPageChanged} />
                        </div>
                    </div>
                </div>
            </MediaQuery>

            {/* Tablet */}
            <MediaQuery minWidth = {768} maxWidth = {991}>
                <div className = "container px-1">
                    <div className="col-12 pb-4" style = {background ? {backgroundColor : 'black',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'} : {backgroundColor : 'white',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'}}>
                        <div className = "row">
                            {checkTitle(title)}
                        </div>
                        <div className="row" style = {{marginTop : '-20px'}}>
                            {currentData}
                        </div>
                        <div className = "row mt-5">
                            <div className = "mx-auto">
                                <Pagination totalRecords={totalData} pageLimit={16} pageNeighbours={1} onPageChanged={onPageChanged} />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>

            {/* Handphone */}
            <MediaQuery minWidth = {360} maxWidth = {767}>
                <div className = "container px-1">
                    <div className="col-12 pb-4" style = {background ? {backgroundColor : 'black',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'} : {backgroundColor : 'white',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'}}>
                        <div className = "row">
                            {checkTitle(title)}
                        </div>
                        <div className="row" style = {{marginTop : '-20px'}}>
                            {currentData}
                        </div>
                        <div className = "row mt-5">
                            <div className = "mx-auto">
                                <Pagination totalRecords={totalData} pageLimit={6} pageNeighbours={1} onPageChanged={onPageChanged} />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>

            {/* Small Handphone */}
            <MediaQuery maxWidth = {359}>
                <div className = "container px-1">
                    <div className="col-12 pb-4" style = {background ? {backgroundColor : 'black',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'} : {backgroundColor : 'white',borderRadius : '15px 15px 5px 5px',marginTop : '70px',marginBottom : '50px'}}>
                        <div className = "row">
                            {checkTitle(title)}
                        </div>
                        <div className="row" style = {{marginTop : '-20px'}}>
                            {currentData}
                        </div>
                        <div className = "row mt-5">
                            <div className = "mx-auto">
                                <Pagination totalRecords={totalData} pageLimit={6} pageNeighbours={1} onPageChanged={onPageChanged} />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </React.Fragment>
    )
}
