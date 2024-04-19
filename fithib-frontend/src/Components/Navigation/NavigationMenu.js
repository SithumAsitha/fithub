import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/"
import EmailIcon from '@mui/icons-material/Email';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PendingIcon from '@mui/icons-material/Pending';

export const navigation=[
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