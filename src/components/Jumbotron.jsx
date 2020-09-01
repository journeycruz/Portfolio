import React from 'react'
import TextLoop from "react-text-loop";
import { Component } from "react";

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my Portfolio',
    }
]

class Jumbotron extends Component {
    render() {
        return (
            <div id="home" className="slider-wrapper">
                {/* Start Single Slide */}
                {SlideList.map((value, index) => (
                    <div className="slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center bg_color--5 rn-slider-height" key={index}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="designer-thumbnail text-center">
                                        <img src="/assets/images/designer-avatar.png" alt="Slider Images" />
                                    </div>
                                </div>
                                <div className="col-lg-7 mt_md--40 mt_sm--40">
                                    <div className={`inner ${value.textPosition}`}>
                                        <h1 className="title">Hi, I’m Journey Cruz <br />
                                            <TextLoop>
                                                <span> Full Stack Developer.</span>
                                                <span> UX Designer.</span>
                                            </TextLoop>
                                            <br />
                                        based in the USA.</h1>
                                        {value.category ? <span>{value.category}</span> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* End Single Slide */}
            </div>
        )
    }
}

export default Jumbotron;