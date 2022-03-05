import React, {useState} from 'react'
import "../CSS/Cart.css"
import { Modal } from '@material-ui/core';
import {AddBox,IndeterminateCheckBox} from '@material-ui/icons';

export const IndItem = ({item, handleDelete, increment, decrement, removeId, open, setOpen, handleClose}) => {


  return (
    <div className='indCartItem'>
        <div className='indContent'>
            <img src={item.images[0]} alt="" />
            <div className='contentView'>
                <p className='itemTitle'>{item.title}</p>
                <div className='sizeView'>
                <p className='size'>Size: {item.sizes[0]}</p>
                <div className='quantityView'>
                <div className='minus' onClick={() => decrement(item)}><IndeterminateCheckBox/></div>
                <p className='quantity'>Qty: {item.quantity}</p>
                <div className='plus' onClick={() => increment(item)}><AddBox /></div>
                </div>
                </div>
                <p className='price'>{item.original_price}</p>
            </div>
        </div>
        <div>
            <p className='remove' onClick={() => handleDelete(item.id)}>REMOVE</p>
        </div>
        <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
    >
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>  
      <div style={{width:200, height:200, display:"flex", flexDirection:"column", alignItems:"center",  backgroundColor:"white"}}>
           <p>Do you want to remove item</p>
           <div>
           <p onClick={() => handleDelete(removeId)}>Yes</p>
           <p onClick={() => setOpen(false)}>No</p>
           </div>
      </div>
      </div>
    </Modal>
    </div>
  )
}
