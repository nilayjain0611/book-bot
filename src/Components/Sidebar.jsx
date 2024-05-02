import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PollIcon from '@mui/icons-material/Poll';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <LibraryBooksIcon className='icon_header' />CAMPUS LIBRARY
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <DashboardIcon className='icon1' /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Books">
            <MenuBookIcon className='icon1' />Total Books
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <CollectionsBookmarkIcon className='icon1' />Issued/Return
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <GroupIcon className='icon1' /> Students
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <FactCheckIcon className='icon1' /> Projects
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <LibraryAddIcon className='icon1' /> Acquisition
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <PollIcon className='icon1' /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <SettingsIcon className='icon1' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
