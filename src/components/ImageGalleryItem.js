import PropTypes from 'prop-types';



export const ImageGalleryItem = ({ id, webformatURL, togle }) => {
  return (
    <ul class="gallery-item"
      className="gallery-item"
      id={id}
      onClick={() => togle(id)}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={id} width={100}  />
    </ul>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  togle: PropTypes.func.isRequired,
};