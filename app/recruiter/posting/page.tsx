'use client';
import { useSearchParams } from "next/navigation";

export default function Postings(){
    const searchParams = useSearchParams();

    const jobId = searchParams.get('jobId');

    return <>
        jobId: {jobId}
    </>
}

