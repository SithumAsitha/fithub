import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from '@mui/icons-material/ListAlt';
import PendingIcon from '@mui/icons-material/Pending';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"
    },
    {
        title:"Explore",
        icon:<ExploreIcon/>,
        path:"/explore"
    },
    {
        title:"Notifications",
        icon:<CircleNotificationsIcon/>,
        path:"/notification"
    },
    {
        title:"Messages",
        icon:<EmailIcon/>,
        path:"/messages"
    },
    {
        title:"Lists",
        icon:<ListAltIcon/>,
        path:"/list"
    },
    {
        title:"Communities",
        icon:<GroupsIcon/>,
        path:"/communities"
    },
    {
        title:"Verified",
        icon:<VerifiedUserIcon/>,
        path:"/verified"
    },
    {
        title:"Profile",
        icon:<AccountBoxIcon/>,
        path:"/profile"
    },
    {
        title:"More",
        icon:<PendingIcon/>,
        path:"/more"
    }
    
]