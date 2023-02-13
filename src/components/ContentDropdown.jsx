import "../styles/styles.css";
import { useState } from "react";
export let isOpen = false;

const ContentDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            {
                props.list.map((item) => (
                    <div>
                        <button className="flex" onClick={handleClick}>{item.title}
                            {isOpen ? <div className="rotate-90 px-4"><i className="fa-solid fa-chevron-right" /></div> : <div className="px-4"><i className="fa-solid fa-chevron-right" /></div>}
                        </button>
                        <p className={isOpen ? 'flex' : 'hidden'}>{item.content}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default ContentDropdown;