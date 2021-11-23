import React from "react";

export default function Experience() {
    return (
        <div class="details">
            <div class="section">
                <div class="section__title">Experience</div>
                <div class="section__list">
                    <div class="section__list-item">
                        <div class="left">
                            <div class="name">Microsoft</div>
                            <div class="addr">US</div>
                            <div class="duration">Mars 2018 - present</div>
                        </div>
                        <div class="right">
                            <div class="name">Datacenter Technician</div>
                            <div class="desc">I'm currently a DCT at Microsoft and student in the Microsoft Leap program
                                to become a software Engineer.</div>
                        </div>
                    </div>
                    <div class="section__list-item">
                        <div class="left">
                            <div class="name">Upwork Freelancer</div>
                            <div class="addr">US</div>
                            <div class="duration">Mars 2019 - present</div>
                        </div>
                        <div class="right">
                            <div class="name">Freelancer</div>
                            <div class="desc">
                                <ul class="experience-el">
                                    <li>Developed a rental app using PHP Laravel based on customer needs..</li>
                                    <li>Introduced Grunt, Bower and npm to automate common tasks, optimize frontend
                                        assets and manage third party packages.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="section__list-item">
                        <div class="left">
                            <div class="name">Amazon</div>
                            <div class="addr">US</div>
                            <div class="duration">December 2016 - February 2018</div>
                        </div>
                        <div class="right">
                            <div class="name">Datacenter Technician</div>
                            <div class="desc">
                                <ul class="experience-el">
                                    <li>day-to-day incident management of servers and networking equipment..</li>
                                    <li>Diagnosed and Troubleshoot support tickets.</li>
                                    <li>Set up and troubleshoot complex network.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}