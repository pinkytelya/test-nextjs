'use client';
import {useParams} from "next/navigation";

export default function FeedbackPage() {
    const {id} = useParams();

    return (
        <div>
            <h1>Your private id - {id}</h1>
        </div>
    );
}