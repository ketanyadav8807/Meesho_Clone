import React, {useState} from 'react'
import "../CSS/Cart.css"
import { CircularProgress, Modal } from '@material-ui/core';
import {AddBox,Close,IndeterminateCheckBox} from '@material-ui/icons';

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
        <div className='screenView'>  
      <div className='modalView'>
           <div className='closeIconView'>
                <Close style={{fontSize:22}} onClick={() => setOpen(false)}/>
           </div>
           <div className='modalTitle'>
                <p>Do you want to remove item</p>
           </div>
           <div className='buttons'>
               <div className='btn' onClick={() => handleDelete(removeId)}>
                  <p>Yes</p>
               </div>
               <div className='btn' onClick={() => setOpen(false)}>
                  <p>No</p>
               </div>
           </div>
      </div>
      </div>
    </Modal>
    </div>
  )
}
