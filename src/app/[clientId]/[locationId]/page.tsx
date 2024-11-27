'use client';
import {useParams} from "next/navigation";
import { useRouter } from "next/navigation";

export default function SecondPage() {
    const router = useRouter();
    const {clientId, locationId} = useParams();

    const handleNavigation = (path: string) => {
        router.push(`/${clientId}/${locationId}/${path}`);
    };


    return(
        <div >
            <div>
                <div>Your Client Id: {clientId}</div>
                <div>Your Location Id: {locationId}</div>
            </div>
            <div>
                <button onClick={() => handleNavigation('feedback')}>Feedback</button>
                <button onClick={() => handleNavigation('subtask-flow')}>subtask-flow</button>
            </div>
        </div>
    )
}