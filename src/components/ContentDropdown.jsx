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
                    {isOpen ? <button className="flex font-medium text-7xl text-orange-400 " onClick={handleClick}>{props.item.title} <div className="rotate-90 px-4"><i className="fa-solid fa-chevron-right" /></div></button> :
                        <button className="flex font-medium text-7xl text-white" onClick={handleClick}>{props.item.title} <div className="px-4"><i className="fa-solid fa-chevron-right text-white" /></div></button>}
                    <div className={`transition duration-500 transform ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
                        <p className="text-3xl pt-12">{props.item.content}</p>
                    </div>
                    <hr className="border-white mt-8"/>
                </div>
            }
        </div>
    )
};

export default ContentDropdown;