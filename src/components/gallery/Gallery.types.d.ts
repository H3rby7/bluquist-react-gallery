export interface GalleryPropType {
    items: GalleryItem[];
    itemsPerPage: number;
}

export interface GalleryItem {
    url: string;
}
export interface GalleryState {
    position: number;
    length: number;
}