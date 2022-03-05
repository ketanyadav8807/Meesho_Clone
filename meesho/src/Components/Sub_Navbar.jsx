import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../CSS/Sub_Navbar.css'
import '../Resp-css/Sub-Navbar-Resp.css'
import {RouterPage} from "../RouterPage"

export const Sub_Navbar = () => {

    const [data, setData] = useState(0)

    return (
        <>
            <nav className="navbar" onMouseLeave={() => setData(0)}>
                <ul>
                    <li className="nav-item" onMouseEnter={() => setData(1)} >
                        <Link to="/home">Women Ethic</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(2)} >
                        <Link to="/about">Women Western</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(3)}>
                        <Link to="#">{"Jewellery & Accessories"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(4)}>
                        <Link to="#">Men</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(5)}>
                        <Link to="#">{"Beauty & Health"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(6)}>
                        <Link to="#">{"Bags & Footwear"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(7)}>
                        <Link to="#">{"Home & Kitchen"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(8)}>
                        <Link to="#">Kids</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(9)}>
                        <Link to="#">Electronics</Link>
                    </li>
                </ul>
                {/* <div className='respIcon' onClick={() => setVisible(!visible)}>
                    {visible ?
                        <img src="https://cdn.iconscout.com/icon/free/png-256/close-1912235-1617704.png" alt="" className='openIcon' />
                        :
                        <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" alt="" className='closeIcon' />
                    }
                </div>
                {visible &&
                    <div className='respNavbar'>
                        <ul>
                            <Link to="/home">
                                <li onClick={() => setVisible(false)}>Home</li>
                            </Link>
                            <Link to="/about">
                                <li onClick={() => setVisible(false)}>Services</li>
                            </Link>
                            <Link to="#">
                                <li onClick={() => setVisible(false)}>Contact Us</li>
                            </Link>
                            <Link to="#">
                                <li onClick={() => setVisible(false)}>About Us</li>
                            </Link>
                        </ul>
                    </div>
                } */}
            </nav>
            <div className='hiddenNavSection'>
                {
                    data === 1 ?
                        <div className="hiddenNav" onMouseEnter={() => setData(1)} onMouseLeave={() => setData(0)}>
                            <p>Welcome to Women Ethic</p>
                        </div>
                        :
                        data === 2 ?
                            <div className="hiddenNav" onMouseEnter={() => setData(2)} onMouseLeave={() => setData(0)}>
                                <p>Welcome to Women Western</p>
                            </div>
                            :
                            data === 3 ?
                                <div className="hiddenNav" onMouseEnter={() => setData(3)} onMouseLeave={() => setData(0)}>
                                    <p>Welcome to Jewellery and Accessories</p>
                                </div>
                                :
                                data === 4 ?
                                    <div className="hiddenNav" onMouseEnter={() => setData(4)} onMouseLeave={() => setData(0)}>
                                        <p>Welcome to Men</p>
                                    </div>
                                    :
                                    data === 5 ?
                                        <div className="hiddenNav" onMouseEnter={() => setData(5)} onMouseLeave={() => setData(0)}>
                                            <p>Welcome to Beauty and health</p>
                                        </div>
                                        :
                                        data === 6 ?
                                            <div className="hiddenNav" onMouseEnter={() => setData(6)} onMouseLeave={() => setData(0)}>
                                                <p>Welcome to Bags and footwear</p>
                                            </div>
                                            :
                                            data === 7 ?
                                                <div className="hiddenNav" onMouseEnter={() => setData(7)} onMouseLeave={() => setData(0)}>
                                                    <p>Welcome to Home and kitchen</p>
                                                </div>
                                                :
                                                data === 8 ?
                                                    <div className="hiddenNav" onMouseEnter={() => setData(8)} onMouseLeave={() => setData(0)}>
                                                        <p>Welcome to Kids</p>
                                                    </div>
                                                    :
                                                    data === 9 &&
                                                    <div className="hiddenNav" onMouseEnter={() => setData(9)} onMouseLeave={() => setData(0)}>
                                                        <p>Welcome to Electronics</p>
                                                    </div>
                }
            </div>
            <RouterPage />
        </>
    );
};
