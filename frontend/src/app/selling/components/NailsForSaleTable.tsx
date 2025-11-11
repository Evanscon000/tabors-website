'use client';
import React, {useEffect, useState} from 'react';
import {getAllNails} from "@/clients/sellingClient";

type NailsForSale = {
    id: string;
    style: string;
    theme: string;
    color: string;
    size: string;
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
        console.log(error)
        getAllNails().then(setRows).catch(event => setError(event.message));
    }, []);

    if(error) return <div role="alert">Failed to load nails</div>
    if (!rows) return <div role="status">Loading</div>;

    return(
        <table role="table"
               aria-label="currentNailsForSaleTable"
               className="border-separate border-spacing-x-6 border-2">
            <thead
                aria-label="Table Header">
                <tr>
                    <th>Style</th>
                    <th>Theme</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
            {rows.map(r => (
                <tr key={r.id}>
                    <td>{r.style}</td>
                    <td>{r.theme}</td>
                    <td>{r.color}</td>
                    <td>{r.size}</td>
                    <td>{formatPrice(r.priceCents)}</td>
                    <td>{r.qty}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default NailsForSaleTable;