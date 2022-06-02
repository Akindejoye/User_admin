import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import './navbar.scss';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <ModeNightIcon className='icon' />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className='icon' />
                        <div className="couter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon className='icon' />
                        <div className="couter">2</div>
                    </div>
                    <div className="item">
                        <ListIcon className='icon' />
                    </div>
                    <div className="item">
                        <img 
                            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Profile"
                            className='avatar' 
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;