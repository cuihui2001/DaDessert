import { useEffect, useState } from "react";

export interface MenuItem {
    name: string;
    description: string;
    ingredient: string;
    calories: number;
    imageSrc: string;
    price: number;
}

export interface SubCategory {
    name: string;
    items: MenuItem[];
}

export interface MainCategory {
    name: string;
    subs: SubCategory[];
}

const createMenuStructure = (data: any) => {
    const categories = {};
    data.forEach(item => {
        let category = categories[item.mainCategory];
        if (!category) {
            category = {};
            categories[item.mainCategory] = category;
        }
        
        let subCategory = category[item.subCategory];
        if (!subCategory) {
            subCategory = [];
            category[item.subCategory] =  subCategory;
        }
        
        subCategory.push({
            name: item.name,
            description: item.description,
            ingredient: item.ingredient,
            calories: item.calories,
            imageSrc: item.imageSrc,
            price: item.price
        })
    });

    let result: MainCategory[] = [];
    for (let mainKey in  categories) {
        let subs: SubCategory[] = [];
        result.push({
            name: mainKey,
            subs: subs
        });

        let category = categories[mainKey]
        for (let subKey in category) {
            subs.push({
                name: subKey,
                items: category[subKey]
            })
        }
    }

    console.log(result);
    return result;
}

export const getMenuItems = async () : Promise<MainCategory[] | null> => {
    try {
        const response = await fetch('menu/full');
        const data = await response.json();
        const categories = createMenuStructure(data);

        return categories;
    } catch (error) {
        console.log("Failed to retrieve menu data. ");
        console.log(error);
    }
    
    return null;
};

export const useMenuService = () => {
    const [result, setResult] = useState<MainCategory[] | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const contact = await getMenuItems();
            setResult(contact);
        };

        loadData();
    }, [])

    return result;
};