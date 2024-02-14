import SidebarStyle from "./SidebarStyle";
import Image from "next/image";
import Logo from "./Icons/Logo.png"
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';
import shareimg from "./Icons/share.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Divider} from "@mui/material";
import menuside from "./menuside";
import {useRouter} from "next/router";



function Sidebar(props) {


    const router = useRouter();

    return (
        <SidebarStyle>

            <div className={`sidebar ${props.hide && "hide"}`}>

                <div className="Logo">

                    <div className="logo">
                        <Image src={Logo}></Image>
                    </div>

                    <ChevronRightIcon className="close" onClick={props.closebar}></ChevronRightIcon>

                </div>

                <div className="selects">

                    {menuside.map((item, index) => (
                        <div className={`select ${ (router.pathname.startsWith(item.pathname) && item.pathname !== "/") ||
                        router.pathname === item.pathname ? "active" : ""}`} onClick={() => router.push(item.pathname)}  >
                            <div className="dash">{item.icon}</div>
                            <h2>{item.title}</h2>
                        </div>
                    ))
                    }


                </div>

                <div className="share">
                    <Image src={shareimg}></Image>
                </div>

            </div>


        </SidebarStyle>
    );
}

export default Sidebar;