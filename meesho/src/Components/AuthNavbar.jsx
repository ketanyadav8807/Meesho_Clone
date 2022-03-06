import React, { useState, useEffect, useContext } from 'react';
import "../CSS/AuthNavbar.css"
import {
    ShoppingCartOutlined,
    PersonOutline,
    SearchOutlined,
    PhoneAndroidOutlined,
    CloseOutlined,
    ExitToApp,
    LocalMallOutlined,
    AccountCircle,
    Menu
} from '@material-ui/icons';
import { Drawer } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useNavigate } from 'react-router-dom';

export const AuthNavbar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [state, setState] = useState(false)
    const [hover, setHover] = useState(0)
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', reportWindowSize);
        return () => {
            window.removeEventListener('resize', reportWindowSize);
        }
    }, [])

    const reportWindowSize = () => {
        setWidth(window.innerWidth);
    }

    const handleChange = (e) => {
        const { value } = e.currentTarget;
        setSearch(value);
    }

    const handleCancel = () => {
        setSearch("")
    }

    console.log(width)
    return (
        <div className='contactBox'>
            <div className='leftView'>
                <div className='title' onClick={() => navigate("/")}>
                    <img src={require("../images/meeshoLogo.png")} alt="" />
                </div>
                <div className='inputField'>
                    <SearchOutlined style={{fontSize: width < "1145" ?  35 : 40}} className="searchIcon"/>
                    <input type="text" value={search} placeholder="Try Saree, Kurti or Search by Product Code" className='input' onChange={handleChange} />
                    {search.length !== 0 && <CloseOutlined style={{ fontSize: 30, color:'#666666' }} className="closeIcon" onClick={handleCancel} />}
                </div>
            </div>

            <div className='rightView'>
                    <div className='cdd'>
                    <PhoneAndroidOutlined style={{fontSize:width < "1335" ?  25 : width < "1145" ? 22 : 30, color:'#666666'}} />
                        <h3 >Download App</h3>
                    <span className='vrDivider'></span>
                </div>
                    <div className='user'>
                    <h3 >Become a Supplier</h3>
                </div>
            </div>
            <div className='respContactBox'>
            <Menu style={{ fontSize: 30, color: 'black' }} onClick={() => setState(true)} />
            <div className='dd' >
                <ShoppingCartOutlined style={{ fontSize: width < "1145" ?  30 : 35,  color:'#666666' }} />
            </div>
            <Drawer anchor='left' open={state}
                onClose={() => setState(false)} onOpen={() => setState(true)}>
                    <div className="drawer">
                    <div><p>meesho</p></div>
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
                        <div><p>categories</p></div>
                        <Accordion>
                    <AccordionSummary
                        className='accordionSum'
                        expandIcon={<ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />}
                    >
                        More Details
                    </AccordionSummary>
                    <AccordionDetails className='accordionDet'>
                        <p>Thank you for clicking</p>
                        <p>Thank you for clicking</p>
                        <p>Thank you for clicking</p>
                        <p>Thank you for clicking</p>
                    </AccordionDetails>
                </Accordion>
                        <div>p</div>
                        <div>p</div>
                        <div>p</div>
                        <div>p</div>
                        <div>p</div>
                        <div>p</div>
                    </div>
            </Drawer>
            </div>
        </div>
    );
};
