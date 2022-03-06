import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import '../CSS/Sub_Navbar.css';
import '../Resp-css/Sub-Navbar-Resp.css';
import {RouterPage} from '../RouterPage'; 
import {
    SearchOutlined,
    CloseOutlined
} from '@material-ui/icons';

export const Sub_Navbar = () => {

    const [data, setData] = useState(0)
    const [search, setSearch] = useState("")
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

    return (
        <div className='navbarDiv'>
            <nav className="navbar" onMouseLeave={() => setData(0)}>
                <ul>
                    <li className="nav-item" onMouseEnter={() => setData(1)} >
                        <Link to="/Women_Ethnic">Women Ethic</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(2)} >
                        <Link to="/Women_Western">Women Western</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(3)}>
                        <Link to="/Jewellery">{"Jewellery & Accessories"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(4)}>
                        <Link to="/Men">Men</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(5)}>
                        <Link to="/Beauty_Products">{"Beauty & Health"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(6)}>
                        <Link to="/Bags_Footwear">{"Bags & Footwear"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(7)}>
                        <Link to="/Home_Kitchen">{"Home & Kitchen"}</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(8)}>
                        <Link to="/Kids">Kids</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setData(9)}>
                        <Link to="/Electronics">Electronics</Link>
                    </li>
                </ul>
            </nav>
            <div className='subInputField'>
                    <SearchOutlined style={{fontSize: width < "1145" ?  35 : 40}} className="newSearchIcon"/>
                    <input type="text" value={search} placeholder="Try Saree, Kurti or Search by Product Code" className='subInput' onChange={handleChange} />
                    {search.length !== 0 && <CloseOutlined style={{ fontSize: 30, color:'#666666' }} className="newCloseIcon" onClick={handleCancel} />}
            </div>
            <div className='hiddenNavSection'>
                {
                    data === 1 ?
                        <div className="hiddenNav" onMouseEnter={() => setData(1)} onMouseLeave={() => setData(0)}>
                            <div className='indHiddenNav'>
                                <Link to={"/Women_Ethnic"}><p>All Sarees</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Silk Sarees</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Cotton Silk</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Cotton Sarees</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Chiffon Sarees</p></Link>
                            </div>
                            <div className='indHiddenNav2'>
                                <Link to={"/Women_Ethnic"}><p>All Kurtis</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Anarkali Kurtis</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Royan Kurtis</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Cottom Kurtis</p></Link>
                                <Link to={"/Women_Ethnic"}><p>Embroided Kurtis</p></Link>
                            </div>
                        </div>
                        :
                        data === 2 ?
                            <div className="hiddenNav" onMouseEnter={() => setData(2)} onMouseLeave={() => setData(0)}>
                                <div className='indHiddenNav'>
                                <Link to={"/Women_Western"}><p>Dresses</p></Link>
                                <Link to={"/Women_Western"}><p>Tops</p></Link>
                                <Link to={"/Women_Western"}><p>Sweaters</p></Link>
                                <Link to={"/Women_Western"}><p>JumpSuits</p></Link>
                                <Link to={"/Women_Western"}><p></p></Link>
                            </div>
                            <div className='indHiddenNav2'>
                                <Link to={"/Women_Western"}><p>Jeans</p></Link>
                                <Link to={"/Women_Western"}><p>Pallazos</p></Link>
                                <Link to={"/Women_Western"}><p>Shorts</p></Link>
                                <Link to={"/Women_Western"}><p>Skirts</p></Link>
                                <Link to={"/Women_Western"}><p>Jeggings</p></Link>
                            </div>
                            </div>
                            :
                            data === 3 ?
                                <div className="hiddenNav" onMouseEnter={() => setData(3)} onMouseLeave={() => setData(0)}>
                            <div className='indHiddenNav'>
                                <Link to={"/Jewellery"}><p>Jewellery sets</p></Link>
                                <Link to={"/Jewellery"}><p>Mangalsutras</p></Link>
                                <Link to={"/Jewellery"}><p>Earings</p></Link>
                                <Link to={"/Jewellery"}><p>Necklaces</p></Link>
                                <Link to={"/Jewellery"}><p>Rings</p></Link>
                            </div>
                                    <div className='indHiddenNav2'>
                                <Link to={"/Jewellery"}><p>Bags</p></Link>
                                <Link to={"/Jewellery"}><p>Watches</p></Link>
                                <Link to={"/Jewellery"}><p>Sunglasses</p></Link>
                                <Link to={"/Jewellery"}><p>Hair Accessories</p></Link>
                                <Link to={"/Jewellery"}><p></p></Link>
                            </div>
                                </div>
                                :
                                data === 4 ?
                                    <div className="hiddenNav" onMouseEnter={() => setData(4)} onMouseLeave={() => setData(0)}>
                                        <div className='indHiddenNav'>
                                <Link to={"/Men"}><p>All Top Wear</p></Link>
                                <Link to={"/Men"}><p>T-Shirts</p></Link>
                                <Link to={"/Men"}><p>Shirts</p></Link>
                                <p></p>
                                <p></p>
                            </div>
                                    <div className='indHiddenNav2'>
                                <Link to={"/Men"}><p>Track Pants</p></Link>
                                <Link to={"/Men"}><p>Jeans</p></Link>
                                <Link to={"/Men"}><p>Trousers</p></Link>
                                <p></p>
                                <p></p>
                            </div>
                                    </div>
                                    :
                                    data === 5 ?
                                        <div className="hiddenNav" onMouseEnter={() => setData(5)} onMouseLeave={() => setData(0)}>
                                            <div className='indHiddenNav'>
                                                <Link to={"/Beauty_Products"}><p>Faces</p></Link>
                                                <Link to={"/Beauty_Products"}><p>Eyes</p></Link>
                                                <Link to={"/Beauty_Products"}><p>Lips</p></Link>
                                                <Link to={"/Beauty_Products"}><p>Nails</p></Link>
                                                <p></p>
                                            </div>
                                                <div className='indHiddenNav2'>
                                                <Link to={"/Beauty_Products"}><p>Sanitizers</p></Link>
                                                <Link to={"/Beauty_Products"}><p>Oral Care</p></Link>
                                                <Link to={"/Beauty_Products"}><p>Hygiene</p></Link>
                                                <p></p>
                                                <p></p>
                                            </div>
                                        </div>
                                        :
                                        data === 6 ?
                                            <div className="hiddenNav" onMouseEnter={() => setData(6)} onMouseLeave={() => setData(0)}>
                                                <div className='indHiddenNav'>
                                                    <Link to={"/Bags_Footwear"}><p>Flats</p></Link>
                                                    <Link to={"/Bags_Footwear"}><p>Bellis</p></Link>
                                                    <Link to={"/Bags_Footwear"}><p>Jutties</p></Link>
                                                    <p></p>
                                                    <p></p>
                                                </div>
                                                <div className='indHiddenNav2'>
                                                     <Link to={"/Bags_Footwear"}><p>Sports Shoes</p></Link>
                                                     <Link to={"/Bags_Footwear"}><p>Formal Shoes</p></Link>
                                                     <Link to={"/Bags_Footwear"}><p>Casual Shoes</p></Link>
                                                     <p></p>
                                                     <p></p>
                                                </div>
                                            </div>
                                            :
                                            data === 7 ?
                                                <div className="hiddenNav" onMouseEnter={() => setData(7)} onMouseLeave={() => setData(0)}>
                                                    <div className='indHiddenNav'>
                                                    <Link to={"/Home_Kitchen"}><p>Besheets</p></Link>
                                                    <Link to={"/Home_Kitchen"}><p>Doormates</p></Link>
                                                    <Link to={"/Home_Kitchen"}><p>Curtains</p></Link>
                                                    <Link to={"/Home_Kitchen"}><p>Mattress</p></Link>
                                                    <p></p>
                                                </div>
                                                <div className='indHiddenNav2'>
                                                     <Link to={"/Home_Kitchen"}><p>All Home Decors</p></Link>
                                                     <Link to={"/Home_Kitchen"}><p>Sticker</p></Link>
                                                     <Link to={"/Home_Kitchen"}><p>Clocks</p></Link>
                                                     <p></p>
                                                     <p></p>
                                                </div>
                                                </div>
                                                :
                                                data === 8 ?
                                                    <div className="hiddenNav" onMouseEnter={() => setData(8)} onMouseLeave={() => setData(0)}>
                                                        <div className='indHiddenNav'>
                                                    <Link to={"/Kids"}><p>All Toys</p></Link>
                                                    <Link to={"/Kids"}><p>Soft Toys</p></Link>
                                                    <Link to={"/Kids"}><p>Stationary</p></Link>
                                                    <Link to={"/Kids"}><p>Watches</p></Link>
                                                    <p></p>
                                                </div>
                                                <div className='indHiddenNav2'>
                                                     <Link to={"/Kids"}><p>All Dresses</p></Link>
                                                     <Link to={"/Kids"}><p>All Baby Care</p></Link>
                                                     <p></p>
                                                     <p></p>
                                                     <p></p>
                                                </div>
                                                    </div>
                                                    :
                                                    data === 9 &&
                                                    <div className="hiddenNav" onMouseEnter={() => setData(9)} onMouseLeave={() => setData(0)}>
                                                        <div className='indHiddenNav'>
                                                    <Link to={"/Electronics"}><p>Mobile Electronics</p></Link>
                                                    <Link to={"/Electronics"}><p>Smart Watches</p></Link>
                                                    <Link to={"/Electronics"}><p>Smartphones</p></Link>
                                                    <Link to={"/Electronics"}><p>Smartphones</p></Link>
                                                    <p></p>
                                                </div>
                                                <div className='indHiddenNav2'>
                                                     <Link to={"/Electronics"}><p>All Cases</p></Link>
                                                     <Link to={"/Electronics"}><p>All Covers</p></Link>
                                                     <p></p>
                                                     <p></p>
                                                     <p></p>
                                                </div>
                                                    </div>
                }
            </div>
            <RouterPage/>
        </div>
    );
};
