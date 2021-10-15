import Gallery from './Gallery';
import { GalleryItem, GalleryPropType } from './Gallery.types';

export default {
    component: Gallery,
    title: 'Gallery',
};

const Template = (args: GalleryPropType) => <Gallery {...args} />

export const Default = Template.bind({});
Default.args = {
    items: [
        createImageGalleryItem(146083),
        createImageGalleryItem(2786709),
        createImageGalleryItem(4577819),
        createImageGalleryItem(4816673),
        createImageGalleryItem(1851164),
        createImageGalleryItem(434090),
        createImageGalleryItem(1661179),
    ],
    itemsPerPage: 4
} as GalleryPropType;

export const Empty = Template.bind({});
Empty.args = Object.assign({}, Default.args, {
    items: []
} as GalleryPropType);

export const OnePerPage = Template.bind({});
OnePerPage.args = Object.assign({}, Default.args, {
    itemsPerPage: 1
} as GalleryPropType);

export const OneItemOnePerPage = Template.bind({});
OneItemOnePerPage.args = Object.assign({}, Default.args, {
    items: [createImageGalleryItem(146083)],
    itemsPerPage: 1
} as GalleryPropType);

export const OneItemFourPerPage = Template.bind({});
OneItemFourPerPage.args = Object.assign({}, Default.args, {
    items: [createImageGalleryItem(146083)],
} as GalleryPropType);

function createImageGalleryItem(id: number): GalleryItem {
    return { url: getImageUrl(id) };
}

function getImageUrl(id: number): string {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
}