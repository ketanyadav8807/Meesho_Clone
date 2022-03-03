import React, { useState } from 'react';
import '../App.css'
import {
    ShoppingCartOutlined,
    PersonOutline,
    SearchOutlined,
    PhoneAndroidOutlined,
    CloseOutlined,
    ExitToApp,
    LocalMallOutlined,
    AccountCircle
} from '@material-ui/icons';

export const Navbar = () => {

    const [search, setSearch] = useState("")
    const [isClicked, setIsClicked] = useState(false);
    const [hover, setHover] = useState(0)

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
        <>
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
                    <div className='profile' onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                        <PersonOutline style={{ fontSize: 35 }} />
                        <p>Profile</p>
                        {hover === 1 &&
                            <div className='profileDetail'>
                                <div className='userView'>
                                    <AccountCircle style={{ fontSize: 60, color: '#f7f9ff' }} />
                                    <div className='userContent'>
                                        <h2>Hello User</h2>
                                        <p>+8605817892</p>
                                    </div>
                                </div>
                                <div className='hrDivider1'></div>
                                <div className='logoutView'>
                                    <LocalMallOutlined style={{ fontSize: 30, color: 'black' }} />
                                    <p>My Orders</p>
                                </div>
                                <div className='hrDivider1'></div>
                                <div className='logoutView'>
                                    <ExitToApp style={{ fontSize: 30, color: 'black' }} />
                                    <p>Logout</p>
                                </div>
                            </div>}
                    </div>
                    <div className='cart'>
                        <ShoppingCartOutlined style={{ fontSize: 35 }} />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </>
    );
};
