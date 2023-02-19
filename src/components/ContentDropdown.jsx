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
                <div className="text-white px-24 py-6">
                    <button className="flex font-bold text-4xl" onClick={handleClick}>{props.item.title}
                        {isOpen ? <div className="rotate-90 px-4"><i className="fa-solid fa-chevron-right" /></div> : <div className="px-4"><i className="fa-solid fa-chevron-right" /></div>}
                    </button>
                    <div className={isOpen ? 'flex' : 'hidden'}>
                        <p className="text-3xl">{props.item.content}</p>
                    </div>
                </div>
            }
        </div>
    )
};

export default ContentDropdown;