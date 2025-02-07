'use client';
import { useSearchParams } from "next/navigation";

export default function Candidate(){
    const searchparams = useSearchParams();
    const applicationId = searchparams.get('applicationId');
    return <>
        Application ID: {applicationId}
    </>

}