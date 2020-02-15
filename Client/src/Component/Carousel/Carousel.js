import React from "react";
import Slider from "react-slick";
import MediaQuery from 'react-responsive'

class SimpleSlider extends React.Component {
    handleMouseClick = (anime_id,name,on_going_id) => {
        this.props.handleCarousel(anime_id,name,on_going_id)
        window.scrollTo(0,0)
    }
    render() { 
        var settingsDesktop = {
        infinite: true,
        speed: 500,
        slidesToShow: this.props.data.length < 3 ? 2 : 3,
        slidesToScroll: 1
        };

        var settingsTab = {
            infinite: true,
            speed: 500,
            slidesToShow: this.props.data.length < 3 ? 2 : 3,
            slidesToScroll: 1
        };

        var settingsMobile = {
            infinite: true,
            speed: 500,
            slidesToShow: this.props.data.length < 2 ? 1 : 2,
            slidesToScroll: 1
        };

        var settingSmallMobile = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        
        const {data} = this.props;
        const viewCarousel = this.props.data.length > 1 ? 
        data.map((list,index) => {
        return  <div className = "container" key = {index} onClick = {()=> this.handleMouseClick(list.anime_id,list.List_Of_Anime.name,list.on_going_id)}>
                    <div className = "row" id = {index}>
                        <div className = "col-12">
                            <img src = {`http://localhost:5000/images/${list.List_Of_Anime.image_detail}`} alt = {list.List_Of_Anime.image_detail} style = {{width : '100%',height : '150px'}}/>
                        </div>
                        <div className = "col-12">
                            <h6>Episode {list.episode}</h6>
                        </div>
                        <div className = "col-12">
                            <small>{list.List_Of_Anime.name}</small>
                        </div>
                    </div>
                </div>
        }) : null;

        return (
            <React.Fragment>
                {/* PC */}
                <MediaQuery minWidth = {992}>
                    <Slider {...settingsDesktop}>
                        {viewCarousel}
                    </Slider>
                </MediaQuery>

                {/* Tablet zzz*/}
                <MediaQuery minWidth = {768} maxWidth = {991}>
                    <Slider {...settingsTab}>
                        {viewCarousel}
                    </Slider>
                </MediaQuery>

                {/* Handphone */}
                <MediaQuery minWidth = {360} maxWidth = {767}>
                    <Slider {...settingsMobile}>
                        {viewCarousel}
                    </Slider>
                </MediaQuery>

                {/* Small Handphone */}
                <MediaQuery maxWidth = {359}>
                    <Slider {...settingSmallMobile}>
                        {viewCarousel}
                    </Slider>
                </MediaQuery>
            </React.Fragment>
        );
    }
}

export default SimpleSlider