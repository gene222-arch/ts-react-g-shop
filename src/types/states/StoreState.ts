export type Rating = {
    rate: number;
    count: number;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

export type StoreState = {
    product: Product,
    products: Product[],
    isLoading: boolean,
    error: any
};