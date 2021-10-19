import { JsxElement } from 'typescript';
import { GalleryItem } from '../Gallery.types';
import GalleryItemComponent from './GalleryItemComponent';

export default {
    component: GalleryItemComponent,
    title: 'Gallery Item',
};

// Not sure what the proper interface would be, so I build my own one for now.
interface JsxGalleryItemElement extends Partial<JsxElement> {
    args?: Partial<GalleryItem>;
}

const Template = (args: GalleryItem) => {
    return (<div style={{ height: '500px', width: '500px' }}>
        <GalleryItemComponent {...args} />
    </div >
    )
}

export const Default = Template.bind({}) as JsxGalleryItemElement;
Default.args = createImageGalleryItem(146083);


function createImageGalleryItem(id: number): GalleryItem {
    return { url: getImageUrl(id) };
}

function getImageUrl(id: number): string {
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
}