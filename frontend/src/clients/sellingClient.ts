import axios from 'axios';

export type SellingDto = {
    id: string;
    style: string;
    theme: string;
    color: string;
    size: string;
    priceCents: number;
    qty: number;
};
export async function getAllNails(): Promise<SellingDto[]> {
    const { data } = await axios.get('http://localhost:8080/api/tabor/selling');
    return data;
}
