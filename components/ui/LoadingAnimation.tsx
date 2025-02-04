"use client";

import Lottie from 'react-lottie';
import animationData from "@/public/animations/LoadingAnimation.json";

export function LoadingAnimation() {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return (
        <div className='bg-blue-200 min-h-screen flex items-center'>
            <Lottie
                options={lottieOptions}
                height={300}
                width={300}
            />
        </div>
    )
}