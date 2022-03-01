import React, { useState } from 'react';
import '../App.css'
import { ShoppingCartOutlined, PersonOutline, SearchOutlined, PhoneAndroidOutlined, CloseOutlined } from '@material-ui/icons';

export const Navbar = () => {

    const [search, setSearch] = useState("")
    const [isClicked, setIsClicked] = useState(false);

    const handleChange = (e) => {
        setIsClicked(true);
        const { value } = e.currentTarget;
        setSearch(value);
    }

    const handleCancel = () => {
        setIsClicked(false);
        setSearch("")
    }
    return (
        <div className='contactBox'>
            <div className='firstView'>
                <div className='title'>
                    <img src={require("../images/meeshoLogo.png")} alt="" />
                </div>
                <div className='inputField'>
                    <SearchOutlined style={{ fontSize: 40, color: "#dbdbdb" }} className="searchIcon" />
                    <input type="text" value={search} placeholder="Try Saree, Kurti or Search by Product Code" className='input' onChange={handleChange} />
                    {isClicked && <CloseOutlined style={{ fontSize: 30 }} className="closeIcon" onClick={handleCancel} />}
                </div>
            </div>
            <div className='secondView'>
                <div className='getApp'>
                    <PhoneAndroidOutlined style={{ fontSize: 30 }} />
                    <p>Download app</p>
                </div>
                <div className='divider'></div>
                <div className='supplier'>
                    <p>Become a supplier</p>
                </div>
                <div className='divider2'></div>
            </div>
            <div className='user'>
                <div className='profile'>
                    <PersonOutline style={{ fontSize: 35 }} />
                    <p>Profile</p>
                </div>
                <div className='cart'>
                    <ShoppingCartOutlined style={{ fontSize: 35 }} />
                    <p>Cart</p>
                </div>
            </div>
        </div>
    );
};
