import { useEffect, useState } from "react";

export interface TrendingItem {
    name: string;
    description: string;
    ingredient: string;
    calories: number;
    imageSrc: string;
    price: number;
};

export const getTrendingItems = async () : Promise<TrendingItem[] | null> => {
    try {
        const response = await fetch('menu/trending');
        const data = await response.json();
        const items: TrendingItem[] = data.map(d => ({
            name: d.name,
            description: d.description,
            ingredient: d.ingredient,
            calories: d.calories,
            imageSrc: d.imageSrc,
            price: d.price
        }));
    
        return items;
    } catch (error) {
        console.log("Failed to retrieve trending data.")
    }
    
    return null;
};

export const useTrendingService = () => {
    const [result, setResult] = useState<TrendingItem[] | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const contact = await getTrendingItems();
            setResult(contact);
        };

        loadData();
    }, [])

    return result;
};