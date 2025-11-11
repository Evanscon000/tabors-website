'use client';
import React, {useEffect, useState} from 'react';

type NailsForSale = {
    id: string;
    style: string;
    theme: string;
    color: string;
    size: number;
    priceCents: number;
    qty: number;
};

const formatPrice = (cents: number) => {
    return (cents/100).toLocaleString(undefined, {style: 'currency', currency: 'USD'});
}

const NailsForSaleTable = () => {

    const [rows, setRows] = useState<NailsForSale[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/tabor/nails')
            .then(r => r.ok ? r.json() : Promise.reject(new Error(String(r.status))))
            .then(setRows)
            .catch(e => setError(e.message));
    }, []);

    if(error) return <div role="alert">Failed to load nails</div>
    if (!rows) return <div aria-busy="true">Loading...</div>;

    return(
        <table role="table" aria-label="currentNailsForSaleTable" className="min-w-full border-collapse">
            <thead aria-label="Table Header">
                <tr>
                    <th scope="col">Style</th>
                    <th scope="col">Theme</th>
                    <th scope="col">Color</th>
                    <th scope="col">Size</th>
                    <th scope="col">PriceCents</th>
                    <th scope="col">Qty</th>
                </tr>
            </thead>
            <tbody>
            {rows.map(r => (
                <tr key={r.id}>
                    <td>{r.style}</td>
                    <td>{r.theme}</td>
                    <td>{r.color}</td>
                    <td>{r.size}</td>
                    <td>{r.priceCents}</td>
                    <td>{r.qty}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default NailsForSaleTable;