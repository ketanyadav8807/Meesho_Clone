import React, { useState, useEffect } from 'react'
import '../CSS/Navbar.css'
import '../Resp-css/Navbar-Resp.css'
import { Drawer } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShoppingCartOutlined,
  PersonOutline,
  SearchOutlined,
  PhoneAndroidOutlined,
  CloseOutlined,
  ExitToApp,
  LocalMallOutlined,
  AccountCircle,
  Menu,
} from '@material-ui/icons'

export const DrawerUI = ({ open, onClose, onOpen, width, handleLogout }) => {
  let authToken = JSON.parse(localStorage.getItem('userToken'))
  let isLoggedIn = false
  if (authToken) {
    isLoggedIn = true
  }

  const navigate = useNavigate()
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={onClose} onOpen={onOpen}>
        <div className="drawer">
          <p style={{ marginTop: 20, marginBottom: 20, fontSize: 30 }}>
            meesho
          </p>
          <div className="userView">
            {isLoggedIn ? (
              <>
                <AccountCircle style={{ fontSize: 60, color: '#f7f9ff' }} />
                <div className="userContent">
                  <h2>Hello User</h2>
                  <p>+8605817892</p>
                </div>
              </>
            ) : (
              <div className="respProfileView">
                <div className="respProfile">
                  <PersonOutline
                    style={{
                      fontSize: width < '1145' ? 30 : 35,
                      paddingTop: width < '1145' ? 2 : 0,
                      color: '#666666',
                    }}
                  />
                  <p>Profile</p>
                </div>
                <div
                  className="respSignUpBtn"
                  onClick={() => navigate('/auth/signup')}
                >
                  <p>Sign Up</p>
                </div>
              </div>
            )}
          </div>
          <div className="hrDivider1"></div>
          <div className="respLogoutView">
            <LocalMallOutlined style={{ fontSize: 30, color: 'black' }} />
            <p>My Orders</p>
          </div>
          <div className="categories">
            <p>categories</p>
          </div>
          <div className="accordionText">
            <Accordion>
              <AccordionSummary
                className="respAccordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Ethnic</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Women_Ethnic'}>
                  <p>All Sarees</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Silk Sarees</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Cotton Silk</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Cotton Sarees</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Chiffon Sarees</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>All Kurtis</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Anarkali Kurtis</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Royan Kurtis</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Cottom Kurtis</p>
                </Link>
                <Link to={'/Women_Ethnic'}>
                  <p>Embroided Kurtis</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Women_Western'}>
                  <p>Dresses</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Tops</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Sweaters</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>JumpSuits</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Jeans</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Pallazos</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Shorts</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Skirts</p>
                </Link>
                <Link to={'/Women_Western'}>
                  <p>Jeggings</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Jewellery'}>
                  <p>Jewellery sets</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Mangalsutras</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Earings</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Necklaces</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Rings</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Bags</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Watches</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Sunglasses</p>
                </Link>
                <Link to={'/Jewellery'}>
                  <p>Hair Accessories</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Men'}>
                  <p>All Top Wear</p>
                </Link>
                <Link to={'/Men'}>
                  <p>T-Shirts</p>
                </Link>
                <Link to={'/Men'}>
                  <p>Shirts</p>
                </Link>
                <Link to={'/Men'}>
                  <p>Track Pants</p>
                </Link>
                <Link to={'/Men'}>
                  <p>Jeans</p>
                </Link>
                <Link to={'/Men'}>
                  <p>Trousers</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Beauty_Products'}>
                  <p>Faces</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Eyes</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Lips</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Nails</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Sanitizers</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Oral Care</p>
                </Link>
                <Link to={'/Beauty_Products'}>
                  <p>Hygiene</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Bags_Footwear'}>
                  <p>Flats</p>
                </Link>
                <Link to={'/Bags_Footwear'}>
                  <p>Bellis</p>
                </Link>
                <Link to={'/Bags_Footwear'}>
                  <p>Jutties</p>
                </Link>
                <Link to={'/Bags_Footwear'}>
                  <p>Sports Shoes</p>
                </Link>
                <Link to={'/Bags_Footwear'}>
                  <p>Formal Shoes</p>
                </Link>
                <Link to={'/Bags_Footwear'}>
                  <p>Casual Shoes</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Home_Kitchen'}>
                  <p>Besheets</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>Doormates</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>Curtains</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>Mattress</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>All Home Decors</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>Sticker</p>
                </Link>
                <Link to={'/Home_Kitchen'}>
                  <p>Clocks</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Kids'}>
                  <p>All Toys</p>
                </Link>
                <Link to={'/Kids'}>
                  <p>Soft Toys</p>
                </Link>
                <Link to={'/Kids'}>
                  <p>Stationary</p>
                </Link>
                <Link to={'/Kids'}>
                  <p>Watches</p>
                </Link>
                <Link to={'/Kids'}>
                  <p>All Dresses</p>
                </Link>
                <Link to={'/Kids'}>
                  <p>All Baby Care</p>
                </Link>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                className="accordionSum"
                expandIcon={
                  <ExpandMoreIcon style={{ fontSize: 45, color: '#666666' }} />
                }
              >
                <p>Women Western</p>
              </AccordionSummary>
              <AccordionDetails className="accordionDet">
                <Link to={'/Electronics'}>
                  <p>Mobile Electronics</p>
                </Link>
                <Link to={'/Electronics'}>
                  <p>Smart Watches</p>
                </Link>
                <Link to={'/Electronics'}>
                  <p>Smartphones</p>
                </Link>
                <Link to={'/Electronics'}>
                  <p>Smartphones</p>
                </Link>
                <Link to={'/Electronics'}>
                  <p>All Cases</p>
                </Link>
                <Link to={'/Electronics'}>
                  <p>All Covers</p>
                </Link>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="respLogout" onClick={() => handleLogout()}>
            <p>Logout</p>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
