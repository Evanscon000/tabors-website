"use client";
import PageHeader from "@/app/components/PageHeader";


export default function Home() {

    return (
        <>
            <PageHeader/>
                <div
                    className=" mt-[350px] bg-blue-500 text-black px-2 rounded flex justify-center items-center h-20"
                >
                    <h1>Welcome To Tabor's Nail Website!</h1>
                </div>
        </>
    );
}
