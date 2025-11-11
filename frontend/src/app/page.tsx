"use client";
import Link from "next/link";


export default function Home() {

    return (
        <div>
            <h1>Fr333qu3ncy Nails</h1>

            <Link href="/selling" aria-label={'link'}>
                <button
                    aria-label={"sellingButton"}
                >Whats for sale?
                </button>
            </Link>
        </div>
    );
}
