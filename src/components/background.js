import React from "react";
import './background.css';
import Title from "./title";
import Image from "./image";
import Skills from "./skills";
import Summary from "./summary";
import Experience from "./experience";

export default function Background(){
    return (
        <div className="bg1">
            <div className="grid-container">
                <div className="grid-item title-layout">
                    <Title/>
                </div>
                <div className="grid-item picture-layout">
                    <Image />
                </div>
                <div className="grid-item skills-layout">
                    <Skills/>
                </div>
                <div className="grid-item summary-layout">
                    <Summary/>
                </div>
                <div className="grid-item experience-layout">
                    <Experience/>
                </div>
            </div>
        </div>
    );
}