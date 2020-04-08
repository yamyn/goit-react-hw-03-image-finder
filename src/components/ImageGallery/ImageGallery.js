import React from 'react';
import PropTypes from 'prop-types';

import { list, item } from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, alt }) => (
    <ul className={list}>
        {images.map(({ id, smallImg }) => (
            <li key={id} className={item}>
                <ImageGalleryItem src={smallImg} alt={alt} />
            </li>
        ))}
    </ul>
);
ImageGallery.defaultProps = {
    alt: 'Cat',
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            smallImg: PropTypes.string.isRequired,
        }),
    ).isRequired,

    alt: PropTypes.string,
};

export default ImageGallery;
