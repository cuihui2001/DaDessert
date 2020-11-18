import { useEffect, useState } from "react";

export interface ContactInfo {
    name: string;
    phone: string;
    address: string;
    email: string;
};

export const getContactInfo = async () : Promise<ContactInfo | null> => {
    try {
        const response = await fetch('contact');
        const data: ContactInfo = await response.json();
    
        return data;
    } catch (error) {
        console.log("Failed to retrieve contact.")
    }
    
    return null;
};

export const useContactService = () => {
    const [result, setResult] = useState<ContactInfo | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const contact = await getContactInfo();
            setResult(contact);
        };

        loadData();
    }, [])

    return result;
};