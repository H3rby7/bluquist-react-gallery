import React from 'react';
import { GalleryItem } from '../Gallery.types';
import GalleryItemComponent from './GalleryItemComponent';

export default {
    component: GalleryItemComponent,
    title: 'Gallery Item',
};

const Template = (args: GalleryItem) => <GalleryItemComponent {...args} />

export const Default = Template.bind({});
Default.args = createImageGalleryItem(146083);


function createImageGalleryItem(id: number): GalleryItem {
    return { url: getImageUrl(id) };
}

function getImageUrl(id: number): string {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
}