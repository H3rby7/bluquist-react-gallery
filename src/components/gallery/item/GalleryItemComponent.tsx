import React, { CSSProperties } from 'react';
import { GalleryItem } from '../Gallery.types';
import '../Gallery.css';

export default function GalleryItemComponent(props: GalleryItem) {

    const style: CSSProperties = {
        backgroundImage: `url('${props.url}')`,
    };
    return (
        <div
            className="gallery-image"
            style={style}></div>
    )
}
