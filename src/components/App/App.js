import React, { Component } from 'react';
import shortid from 'shortid';

import imagesApi from '../../services/apiService';
import mapper from '../../services/mapper';

import styles from './App.module.css';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

export default class App extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.fethImages();
    }

    fethImages = query => {
        if (query) imagesApi.currentQuery = query;

        imagesApi.fethImages().then(res => {
            this.setState({ images: mapper(res) });
        });
    };

    render() {
        const images = this.state.images;
        const alt = imagesApi.currentQuery;

        return (
            <div className={styles.container}>
                <Searchbar onSubmit={this.fethImages} />
                <ImageGallery images={images} alt={alt} />
            </div>
        );
    }
}
