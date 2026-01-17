// Define types to prevent "never[]" inference when arrays are empty
export interface MockOwner {
    id: string;
    name: string;
    phone: string;
    address: string;
    status: string;
}

export interface MockProperty {
    id: string;
    owner_id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    youtube_id: string;
    images: string[];
    is_published: boolean;
    created_at: string;
    owners: MockOwner;
}

export const MOCK_OWNERS: MockOwner[] = [];
export const MOCK_PROPERTIES: MockProperty[] = [];
