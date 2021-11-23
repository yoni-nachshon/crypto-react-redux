import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal  } from 'react-bootstrap';

export default function ModalCoin(props) {

    const {show,setShow,coins} = props;
    
  
    const handleClose = () => setShow(false);
    
  
    return (
      <>
       
        <Modal show={show} onHide={handleClose} animation={false}>
           
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
       
      </>
    );
  }
  ModalCoin.propTypes = {
      show: PropTypes.bool,
      setShow: PropTypes.func,
      coins: PropTypes.array
  }
  
