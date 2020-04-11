import React, { Component } from 'react';

import imagesApi from '../../services/apiService';
import mapper from '../../helpers/mapper';

import styles from './App.module.css';

import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Notification from '../Notification/Notification';

export default class App extends Component {
    state = {
        images: [],
        isLoading: false,
        isNotFound: false,
    };

    componentDidMount() {
        this.fetchImages();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.images.length > 12) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    fetchImages = query => {
        if (query && typeof query === 'string') {
            this.setState({ images: [] });
            imagesApi.currentQuery = query;
            imagesApi.resetPage();
        }
        imagesApi
            .fethImages()
            .then(res => {
                if (res.length === 0) {
                    this.setState({ isNotFound: true });

                    return;
                }
                this.setState(state => ({
                    images: [...state.images, ...mapper(res)],
                    isNotFound: false,
                }));
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    };

    getNewImgHandler = () => {
        this.setState({ isLoading: true });
        this.fetchImages();
    };

    render() {
        const { images, isLoading, isNotFound } = this.state;
        const alt = imagesApi.currentQuery;

        return (
            <div className={styles.container}>
                <Searchbar onSubmit={this.fetchImages} />
                {isNotFound ? (
                    <Notification message="Images for your query not found" />
                ) : (
                    <>
                        {images.length > 0 ? (
                            <>
                                <ImageGallery images={images} alt={alt} />
                                <div className={styles.loadingWrap}>
                                    {isLoading ? (
                                        <Loader type="ThreeDots" />
                                    ) : (
                                        <Button
                                            onClick={this.getNewImgHandler}
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            <Loader type="Oval" />
                        )}
                    </>
                )}
            </div>
        );
    }
}
