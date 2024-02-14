import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";

const menuside = [
    {
        icon:  <GridViewIcon className="dash"></GridViewIcon>,
        title: "Dashboard",
        pathname: "/",
    },

    {
        icon:  <GroupsIcon className="dash"></GroupsIcon>,
        title: "Team",
        pathname: "/teams",
    },

    {
        icon:  <PeopleAltIcon className="dash"></PeopleAltIcon>,
        title: "Employee",
        pathname: "/employee",
    },

    {
        icon:  <BusinessCenterIcon className="dash"></BusinessCenterIcon>,
        title: "Projects",
        pathname: "/project",
    },

    {
        icon:  <LocalPhoneIcon className="dash"></LocalPhoneIcon>,
        title: "Meeting",
        pathname: "/meeting",
    },

    {
        icon: <FolderIcon className="dash"></FolderIcon>,
        title: "Tasks",
        pathname: "/tasks",
    },

    {
        icon: <SettingsIcon className="dash"></SettingsIcon>,
        title: "Settings",
        pathname: "/settings",
    }
]

export default menuside;