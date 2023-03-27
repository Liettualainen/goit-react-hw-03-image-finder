import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    };
    
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
 
  render() {

      return createPortal(
           <div class="overlay" className="Overlay" onClick={this.handleBackDrop}>
                 <div class="modal" className="Modal">
                     {this.props.children }
                </div>
             </div>, modalRoot
    );
  }
}

export default Modal;






//   state = {
//     showModal: false,
//   }

// componentDidMount() {}

//   toggleModal = () => { 
//     this.setState(({showModal}) => ({
//       showModal: !showModal,
//     }))
//   }
//     componentDidMount() {      
//           console.log('монтуємо');
//         window.addEventListener('keydown', this.handelKeyDown);
// }
//     componentWillUnmount() {
//         console.log('розмонтували');
//         window.removeEventListener('keydown', this.handelKeyDown)

//     }

//     handelKeyDown = event => {
//         if (event.code === 'Escape') {
//             this.props.onCloseModal();
//             console.log('нажали ескейп');
//         }
//     }
//     handleBackdropClick = event => {
//         if (event.currentTarget === event.target) {
//                 this.props.onCloseModal();
//         }
//     }


     
//     render() {
//  // const { showModal } = this.state;
//         return  createPortal(
//              <div class="overlay" className="Overlay" onClick={this.handleBackdropClick}>
//                 <div class="modal" className="Modal">
//                     {/* <h1>Not closable</h1>
//                     <p>It's not possible to close this lightbox with a click.</p>
//                     <img src="" alt="" /> */}
//                     {this.props.children }
//                 </div>
//             </div>, modalRoot
//         );
//     }
// }

//  {/* <button type='button' onClick={this.toggleModal} >Open modal</button> 

//        {showModal && (
//          <Modal onCloseModal={this.toggleModal}>
           
//            <p className="Font">
//               <h1 >Not closable</h1>
//                     <p>It's not possible to close this lightbox with a click.</p>
//                     <img src="" alt="" />
//          </p>         
//             <button type='button' onClick={this.toggleModal} >Close modal</button>
//        </Modal > )}
//        */}
   
       