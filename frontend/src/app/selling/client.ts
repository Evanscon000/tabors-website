export type NailForSale = {
    id: string;
    style: string;
    color: string;
    theme: string;
    size: string;
    priceCents: number;
    qty: number;
};

export async function getNailsForTabor(): Promise<NailForSale[]> {
    const response = await fetch('/api/tabor/nails', {
        headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
}
