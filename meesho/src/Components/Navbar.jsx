import React, { useState, useEffect } from 'react';
import "../CSS/Navbar.css"
import '../Resp-css/Navbar-Resp.css'
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

export const Navbar = () => {

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
                <div className='title'>
                    <img src={require("../images/meeshoLogo.png")} alt="" />
                </div>
                <div className='inputField'>
                    <SearchOutlined style={{fontSize: width < "1145" ?  35 : 40}} className="searchIcon"/>
                    <input type="text" value={search} placeholder="Try Saree, Kurti or Search by Product Code" className='input' onChange={handleChange} />
                    {search.length !== 0 && <CloseOutlined style={{ fontSize: 30, color:'#666666' }} className="closeIcon" onClick={handleCancel} />}
                </div>
            </div>

            <div className='rightView'>
                <div className='rightViewContent'>
                    <div className='app'>
                        <PhoneAndroidOutlined style={{fontSize:width < "1335" ?  25 : width < "1145" ? 22 : 30, color:'#666666'}} />
                        <h3 >Download App</h3>
                    </div>
                    <span className='vrDivider'></span>
                    <div className='cdd'>
                        <h3 >Become a Supplier</h3>
                    </div>
                    <span className='vrDivider'></span>
                </div>
                <div className='user'>
                    <div className='profile'>
                       <PersonOutline style={{ fontSize: width < "1145" ?  30 : 35, paddingTop: width < "1145" ? 2 : 0, color:'#666666' }} />
                       <h3>Profile</h3>
                    </div>
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
                    </div>
                    }
                    <div className='dd' >
                       <ShoppingCartOutlined style={{ fontSize: width < "1145" ?  30 : 35,  color:'#666666' }} />
                       <h3>Cart</h3>
                    </div>
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

    // <>
    //     <div className='contactBox'>
    //         <div className='firstView'>
    //             <div className='title'>
    //                 <img src={require("../images/meeshoLogo.png")} alt="" />
    //             </div>
    //             <div className='inputField'>
    //                 <SearchOutlined style={{ fontSize: 40, color: "#dbdbdb" }} className="searchIcon" />
    //                 <input type="text" value={search} placeholder="Try Saree, Kurti or Search by Product Code" className='input' onChange={handleChange} />
    //                 {isClicked && <CloseOutlined style={{ fontSize: 30 }} className="closeIcon" onClick={handleCancel} />}
    //             </div>
    //         </div>
    //         <div className='secondView'>
    //             <div className='getApp'>
    //                 <PhoneAndroidOutlined style={{ fontSize: 30 }} />
    //                 <p>Download app</p>
    //             </div>
    //             <div className='divider'></div>
    //             <div className='supplier'>
    //                 <p>Become a supplier</p>
    //             </div>
    //             <div className='divider2'></div>
    //             <div className='profile' >
    //                 
    //                 
    //             </div>
    //             <div className='cart'>

    //             </div>
    //         </div>
    //     </div>
    // </>