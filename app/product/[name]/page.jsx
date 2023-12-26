"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { database } from "@/lib/appwrite";
import { Query } from "appwrite";
import { useState } from "react";

export default function Page({ params }) {
    const [content, setContent] = useState(null);

    const data = database.listDocuments(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_TEMPLATES_COLLECTION_ID,
        [
            Query.equal('name', params.name)
        ]
    )
    data.then((data) => {
        setContent(data.documents[0]);
        console.log([data.documents[0].url]);
    })

    return (
        <div>
            <Header />
            {
                content && <iframe src={content.url} />
            }
            <Footer />
        </div>
    )
}