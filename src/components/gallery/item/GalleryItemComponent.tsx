import React, { CSSProperties } from 'react';
import { GalleryItem } from '../Gallery.types';
import '../Gallery.css';

/**
 * Just a sample for Gallery.
 * Gallery should work with any passed components, not jsut images.
 * 
 * @param props 
 * @returns 
 */
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
