import React, { Component } from 'react';
// import { Bars } from 'react-loader-spinner';
//import { Bars } from './Loader';
import Loader from './Loader';
import { getImages } from '../PixabaiAPI';

import ButtonLoadMore from './ButtonLoadMore';
import { Modal } from './Modal';
import ImageGalleryItem from './ImageGalleryItem';



export class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        loader: false,
        modal: false,
        modalItem: null,
    };
 
componentDidUpdate = async (prevProps, prevState) => {
    const { page } = this.state;
    const prevText = prevProps.searchText;
    const currentText = this.props.searchText;

    if (prevText !== currentText) {
      this.setState({ loader: true });

      try {
        const response = await getImages(currentText, 1);
        const imagesData = await response.json();

        this.setState({
          images: [...imagesData.hits],
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.setState({ loader: false });
      }
    }

    if (prevText === currentText && prevState.page !== page) {
      this.setState({ loader: true });

      try {
        const response = await getImages(currentText, page);
        const imagesData = await response.json();

        this.setState(prevState => ({
          images: [...prevState.images, ...imagesData.hits],
        }));
      } catch (err) {
        console.log(err);
      } finally {
        this.setState({ loader: false });
      }
    }
  };
  handleButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  togleImage = imageId => {
    this.state.images.find(
      image =>
        image.id === imageId && this.setState({ modalItem: image, modal: true })
    );
  };

  toggleModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { handleButtonClick, toggleModal } = this;
      const { images, loader, modalItem } = this.state;

    return (
      <>
        {this.state.modal && (
          <Modal onClose={toggleModal}>
            <img src={modalItem.largeImageURL} alt={modalItem.tags}/>
          </Modal>
        )}
        {images.length > 0 && (
          <ul className="ImageGallery">
            {this.state.images.map(({ id, webformatURL }) => {
              return (
                <ImageGalleryItem 
                  key={id}
                  id={id}
                  webformatURL={webformatURL}
                  togle={this.togleImage}
                />
              );
            })}
          </ul>
        )}
        <Loader
          isVisible = {loader}
        />
        {images.length > 0 && <ButtonLoadMore onClick={handleButtonClick} />}
      </>
    );
  }
}

export default ImageGallery;