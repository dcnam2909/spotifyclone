import React from 'react';
import '../css/SidebarOption.css';



export default function SidebarOption({ text, Icon }) {
    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option__icon" />}
            {Icon ? <h4>{text}</h4> : <p>{text}</p>}
        </div>
    )
}