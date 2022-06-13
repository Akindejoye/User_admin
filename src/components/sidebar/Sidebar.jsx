import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SecurityIcon from '@mui/icons-material/Security';
import DataArrayIcon from '@mui/icons-material/DataArray';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { DarkModeContext } from './../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return ( 
        <div className="sidebar">
            <Link to='/' style={{textDecoration: "none"}}>
                <div className='top'><span className='logo'>tayeadmin</span></div>
            </Link>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                        <PeopleAltIcon className="icon" />
                        <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                        <ProductionQuantityLimitsIcon className="icon" />
                        <span>Products</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SecurityIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <DataArrayIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <FaceIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div 
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT"})}
                ></div>
                <div 
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK"})}
                    ></div>
            </div>
        </div>
     );
}
 
export default Sidebar;