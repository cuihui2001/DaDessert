import { useEffect, useState } from "react";

export interface OnSaleItem {
    name: string;
    description: string;
    ingredient: string;
    calories: number;
    imageSrc: string;
    price: number;
};

export const getOnSaleItems = async () : Promise<OnSaleItem[] | null> => {
    try {
        const response = await fetch('menu/onsale');
        const data = await response.json();
        const items: OnSaleItem[] = data.map(d => ({
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

export const useOnSaleService = () => {
    const [result, setResult] = useState<OnSaleItem[] | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const contact = await getOnSaleItems();
            setResult(contact);
        };

        loadData();
    }, [])

    return result;
};