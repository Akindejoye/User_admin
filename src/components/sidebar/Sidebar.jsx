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
import './sidebar.scss';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className='top'><span className='logo'>tayeadmin</span></div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <PeopleAltIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className='icon' />
                        <span>Products</span>
                    </li>
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
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
     );
}
 
export default Sidebar;