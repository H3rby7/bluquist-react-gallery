import React, { Component, CSSProperties, ReactNode } from 'react';
import './Gallery.css';

import PropTypes from 'prop-types';
import { GalleryItem, GalleryPropType, GalleryState } from './Gallery.types';

export default class Gallery extends Component<GalleryPropType, GalleryState> {

    constructor(public props: GalleryPropType) {
        super(props);
        this.state = {
            position: 0,
            length: props.items ? props.items.length : 0,
        }
    }

    propTypes = {
        /** list of images to display */
        imageUrls: PropTypes.arrayOf(PropTypes.string)
    };

    render(): ReactNode {
        const visibleItems = this.getDisplayedItems().map(this.renderOne);

        return (
            <div className="gallery">
                {visibleItems}
            </div>
        );
    }

    renderOne(item: GalleryItem, index: number): ReactNode {
        const style: CSSProperties = {
            backgroundImage: `url('${item.url}')`,
        };
        return (
            <div
                className="gallery-image"
                style={style}
                key={index}></div>
        )
    }

    getDisplayedItems(): GalleryItem[] {
        if (!this.props.items) {
            return [];
        }
        const position = this.state.position;
        const displayCount = this.getItemsPerPage();
        const lastItem = position + displayCount;

        return this.props.items.slice(position, lastItem < this.state.length ? lastItem : this.state.length);
    }

    /**
     * 
     * Stubbed to '4' for the moment. 
     * Could GET via props or internal screen size query
     * 
     * @returns the number of items to be displayed per page
     */
    getItemsPerPage(): number {
        return this.props.itemsPerPage;
    }
}
