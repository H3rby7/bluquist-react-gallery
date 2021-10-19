export interface GalleryPropType {
    items: any[];
    itemsPerPage: number;
    // If the gallery should make rest calls this would be a place to put the query + params, or pass a function to build the query
}

export interface GalleryState {
    position: number;
    length: number;
}

// WIP, just a POC to pass an item and access its properties and see something without loss of work
export interface GalleryItem {
    url: string;
}