import "../styles/styles.css";
import "../styles/sidebar.css";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid p-2">
                    <div className="w-20 h-20">
                    </div>
                    <div className="form-inline ml-auto">
                        <div className="w-20 h-auto" onClick={ToggleSidebar} >
                            <img src='../../icon-burgermenu.png' />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Sidebar Header</h4>
                    <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                </div>
                <div className="sd-body">
                    <ul>
                        <li><a className="sd-link">Menu Item 1</a></li>
                        <li><a className="sd-link">Menu Item 2</a></li>
                        <li><a className="sd-link">Menu Item 3</a></li>
                        <li><a className="sd-link">Menu Item 4</a></li>
                        <li><a className="sd-link">Menu Item 5</a></li>
                        <li><a className="sd-link">Menu Item 6</a></li>
                        <li><a className="sd-link">Menu Item 7</a></li>
                        <li><a className="sd-link">Menu Item 8</a></li>
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </div>
    )
}

export default Sidebar;