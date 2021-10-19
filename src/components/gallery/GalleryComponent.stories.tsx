import { JsxElement } from 'typescript';
import { GalleryItem, GalleryPropType } from './Gallery.types';
import GalleryComponent from './GalleryComponent';

export default {
    component: GalleryComponent,
    title: 'Gallery',
};

// Not sure what the proper interface would be, so I build my own one for now.
interface JsxGalleryElement extends Partial<JsxElement> {
    args?: Partial<GalleryPropType>;
}

const Template = (args: GalleryPropType) => <GalleryComponent {...args} />

export const Default = Template.bind({}) as JsxGalleryElement;
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
};

export const Empty = Template.bind({}) as JsxGalleryElement;
Empty.args = Object.assign({}, Default.args, {
    items: [],
});

export const OnePerPage = Template.bind({}) as JsxGalleryElement;
OnePerPage.args = Object.assign({}, Default.args, {
    itemsPerPage: 1
});

export const OneItemOnePerPage = Template.bind({}) as JsxGalleryElement;
OneItemOnePerPage.args = Object.assign({}, Default.args, {
    items: [createImageGalleryItem(146083)],
    itemsPerPage: 1
});

export const OneItemFourPerPage = Template.bind({}) as JsxGalleryElement;
OneItemFourPerPage.args = Object.assign({}, Default.args, {
    items: [createImageGalleryItem(146083)],
});

function createImageGalleryItem(id: number): GalleryItem {
    return { url: getImageUrl(id) };
}

function getImageUrl(id: number): string {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
}