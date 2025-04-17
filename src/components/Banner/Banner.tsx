import { JSX, ReactNode } from "react";

interface BannerProps {
    children: ReactNode;
}

export const Banner = ({ children }: BannerProps): JSX.Element | null => {
    return (

        <div className="w-screen relative -ml-[50vw] h-[50px] left-1/2">
            <div className="bg-amber-100 text-amber-700 px-4 py-3" role="alert">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner