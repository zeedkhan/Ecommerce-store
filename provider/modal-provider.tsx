"use client";

import PreviewModal from "@/components/preview-modal";
import { useState, useEffect } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])


    return (
        <>
            <PreviewModal />
        </>
    )

}

export default ModalProvider;