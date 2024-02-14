import React from 'react';
import style from "../Layout/Layout.module.scss";
import Image from "next/image";
import bars from "../Layout/Images/bar.png";
import barstats from "../Layout/Images/barstats.png";
import downside from "../Layout/IconsStuff/DownSide.png";
import radiusimg from "../Layout/Images/raidusstat.png";
import Chartimg from "../Layout/Images/Chartimg.png";
import notify1 from "../Layout/Images/notify1.png";
import notify2 from "../Layout/Images/notify2.png";
import notify3 from "../Layout/Images/notify3.png";
import notify4 from "../Layout/Images/notify4.png";
import notify5 from "../Layout/Images/notify5.png";

function Dashboard() {
    return (

            <div className={style.mainpage}>

                <div className={style.stats}>

                    <div className={style.teamEmployes}>

                        <div className={style.team}>

                            <h2>Teams Strength</h2>

                            <div className={style.barimg}>
                                <Image src={bars}></Image>
                            </div>

                            <div className={style.barstatsimg}>
                                <Image src={barstats}></Image>
                            </div>

                        </div>
                        <div className={style.employe}>

                            <div className={style.employedate}>
                                <h2>Employe</h2>
                                <div className={style.data}>
                                    <p>Aug 25-Sept 25</p>
                                    <Image src={downside}></Image>
                                </div>
                            </div>

                            <div className={style.empstat}>

                                <div className={style.empstats}>

                                    <div className={style.pulse}>

                                        <div className={style.firstpulse}>

                                            <div className={style.dpulse}>
                                                <div className={style.plus}></div>
                                                <p>Inactive</p>
                                            </div>

                                            <h2>254</h2>

                                        </div>

                                    </div>
                                    <div className={style.pulse}>

                                        <div className={style.firstpulse}>

                                            <div className={style.dpulse}>
                                                <div className={style.plus2}></div>
                                                <p>Active</p>
                                            </div>

                                            <h2>3000</h2>

                                        </div>

                                    </div>
                                    <div className={style.pulse}>

                                        <div className={style.firstpulse}>

                                            <div className={style.dpulse}>
                                                <div className={style.plus3}></div>
                                                <p>Total</p>
                                            </div>

                                            <h2>3254</h2>

                                        </div>

                                    </div>
                                </div>
                                <div className={style.empradiusimg}>
                                    <Image src={radiusimg}></Image>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className={style.chartstat}>
                        <Image src={Chartimg}></Image>
                    </div>

                </div>
                <div className={style.info}>

                    <div className={style.minicards}>

                        <div className={style.mincard}>
                            <h2>Top 10</h2>
                            <h4>Position in dribbble</h4>
                            <p>20% Increase from Last Week</p>
                        </div>
                        <div className={style.mincard1}>
                            <h2>26</h2>
                            <h4>New employees onboarded</h4>
                            <p>15% Increase from Last Month</p>
                        </div>
                        <div className={style.mincard2}>
                            <h1>500</h1>
                            <h3>New Clients Approached</h3>
                            <p>5% Increase from Last Week</p>
                        </div>

                    </div>

                    <div className={style.notify}>

                        <div className={style.viewall}>

                            <h2>Notification</h2>
                            <h3>View All</h3>

                        </div>
                        <div className={style.messages}>

                            <div className={style.message}>
                                <div className={style.messenger}>
                                    <Image src={notify1}></Image>

                                    <div className={style.seemessage}>
                                        <h2>Ellie joined team developers</h2>
                                        <p>04 April, 2021 | 04:00 PM</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.message}>
                                <div className={style.messenger}>
                                    <Image src={notify2}></Image>

                                    <div className={style.seemessage}>
                                        <h2>Jenny joined team HR</h2>
                                        <p>04 April, 2021 | 04:00 PM</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.message}>
                                <div className={style.messenger}>
                                    <Image src={notify3}></Image>

                                    <div className={style.seemessage}>
                                        <h2>Adam got employee of the month</h2>
                                        <p>03 April, 2021 | 02:00 PM</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.message}>
                                <div className={style.messenger}>
                                    <Image src={notify4}></Image>

                                    <div className={style.seemessage}>
                                        <h2>Robert joined team design</h2>
                                        <p>02 April, 2021 | 02:00 PM</p>
                                    </div>
                                </div>

                            </div>
                            <div className={style.message}>
                                <div className={style.messenger}>
                                    <Image src={notify5}></Image>

                                    <div className={style.seemessage}>
                                        <h2>Jack joined team design</h2>
                                        <p>01 April, 2021 | 03:00 PM</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


    );
}

export default Dashboard;
