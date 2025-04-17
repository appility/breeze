import React, { ReactNode } from "react";
import Header from "../../Header/Header";
import Container from "../../Container/Container";

interface NavItem {
    label: string;
    path: string;
    className?: string;
}

interface DefaultLayoutProps {
    headerTitle?: string;
    navItems?: NavItem[];
    children?: ReactNode;
}

export const DefaultLayout = ({ headerTitle, navItems, children }: DefaultLayoutProps): React.JSX.Element | null => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Fixed Header */}
            <Header title={headerTitle} navItems={navItems} />

            {/* Main Content Container */}
            <main className="flex-grow pt-20 pb-8">
                <Container>
                    {/* {children || <Outlet />} */}
                    {children}
                </Container>
            </main>

            {/* Sticky Footer */}
            <footer className="bg-white border-t mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-gray-600">
                        © {new Date().getFullYear()} Breeze. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default DefaultLayout;
