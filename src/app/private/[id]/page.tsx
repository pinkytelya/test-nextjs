'use client';
import {useParams} from "next/navigation";

export default function FeedbackPage() {
    const params = useParams();
    const id = params.id;

    return (
        <div>
            <h1>Your private id - {id}</h1>
        </div>
    );
}