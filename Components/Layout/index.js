import React, {useState} from 'react';
import style from "./Layout.module.scss";
import SearchIcon from "./IconsStuff/SearchBar.png"
import Bell  from "./IconsStuff/Bell.png"
import Image from "next/image";
import userPhoto from "./IconsStuff/user.png"
import downside from "./IconsStuff/DownSide.png"
import Sidebar from "../Sidebar";


function Layout({children}) {


    const [hide, sethide] = useState(false)


    const closebar = () => {
        sethide(true)
        console.log(hide)
    }

    const open = () => {
        sethide(false)
        console.log(hide)
    }

    console.log(children)


    return (
        <div className={style.Layout}>


        <Sidebar hide={hide} closebar={closebar}></Sidebar>
        <div className={style.section}>
            <div className={style.navbar}>
                <div className={style.Globalsentence}>
                    <h1>Global Morning Anima</h1>
                    <p>Home you have a good day</p>
                </div>
                <div className={style.settings}>
                    <div className={style.icons}>
                        <Image src={SearchIcon}></Image>
                        <Image src={Bell}></Image>
                    </div>
                    <div className={style.user}>
                        <Image onClick={open} src={userPhoto}></Image>
                        <Image onClick={open} src={downside}></Image>
                    </div>
                </div>
            </div>

            <div>
                {children}
            </div>


        </div>

        </div>
    );
}

export default Layout;