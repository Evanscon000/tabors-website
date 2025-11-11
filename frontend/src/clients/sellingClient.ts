import axios from "axios";

export type NailForSale = {
    id: string;
    style: string;
    color: string;
    theme: string;
    size: string;
    priceCents: number;
    qty: number;
};

export const getNailsForTabor = async (): Promise<NailForSale[]> => {
    const resp = await axios.get('/api/tabor/nails')
    return resp.data;
}
