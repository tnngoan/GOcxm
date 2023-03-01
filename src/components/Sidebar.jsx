import "../styles/styles.css";
import "../styles/sidebar.css";
import { useState } from "react";
import { faBars as faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        setIsopen(!isOpen);
        console.log(isOpen);
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid p-2">
                    <div className="w-20 h-20">
                    </div>
                    <div className="form-inline ml-auto">
                        <div className="h-auto cursor-pointer text-white" onClick={ToggleSidebar} >
                            <FontAwesomeIcon size="3x" icon={faBars} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Sidebar Header</h4>
                    <div onClick={ToggleSidebar}><FontAwesomeIcon size="2x" icon={faBars} /></div>
                </div>
                <div className="sd-body">
                    <ul>
                        <li><a className="sd-link" href='/'>Home</a></li>
                        <li><a className="sd-link" href='/solution'>Solutions</a></li>
                        <li><a className="sd-link" href='/about'>About</a></li>
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </div>
    )
}

export default Sidebar;