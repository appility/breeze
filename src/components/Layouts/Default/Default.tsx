import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header, { HeaderProps } from "../../Header/Header";
import Container from "../../Container/Container";

interface DefaultLayoutProps {
    headerProps?: HeaderProps;
    children?: ReactNode;
}

export const DefaultLayout = ({ headerProps, children }: DefaultLayoutProps): React.JSX.Element | null => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Render Header with provided props */}
            {headerProps && <Header {...headerProps} />}

            {/* Main Content Container */}
            <main className="flex-grow pt-16 pb-8">
                <Container>
                    {children || <Outlet />}
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
