import React, { Component, ReactNode } from 'react';
import './Gallery.css';

import { GalleryItem, GalleryPropType, GalleryState } from './Gallery.types';
import GalleryItemComponent from './item/GalleryItemComponent';

export default class GalleryComponent extends Component<GalleryPropType, GalleryState> {

    constructor(public props: GalleryPropType) {
        super(props);
        this.state = {
            position: 0,
            length: props.items ? props.items.length : 0,
        }
    }

    render(): ReactNode {
        const visibleItems = this.getDisplayedItems().map(item => <GalleryItemComponent {...item} />);

        return (
            <div className="gallery">
                <div className="content">
                    {visibleItems}
                </div>
                <div className="controls">
                    <button onClick={() => this.backward()}>&lt;</button>
                    <button onClick={() => this.forward()}>&gt;</button>
                </div>
            </div>
        );
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

    getItemsPerPage(): number {
        return this.props.itemsPerPage;
    }

    // moves 1 step, could of course be switched to move a full page
    forward() {
        this.moveTo(this.state.position + 1);
    }

    // moves 1 step, could of course be switched to move a full page
    backward() {
        this.moveTo(this.state.position - 1);
    }

    /**
     * Change position. Can violate the gallery bounds in the call as the new position is being covnerted to a valid one.
     * 
     * @param nextPosition new position, can be oblivious to the gallery bounds
     */
    moveTo(nextPosition: number) {
        const maxValidPosition = this.state.length - this.props.itemsPerPage + 1;
        nextPosition = (nextPosition + maxValidPosition) % maxValidPosition;
        console.log(`Next position: ${nextPosition}`)
        this.setState(Object.assign({}, this.state, { position: nextPosition }))
    }
}
