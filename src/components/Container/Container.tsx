import { JSX, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element | null => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
    </div>
);

export default Container;
