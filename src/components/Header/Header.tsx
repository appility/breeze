import { ReactNode } from "react";
import Logo from "../Logo/Logo";
import ProfileWidget from "./ProfileWidget";

interface NavItem {
    label: string;
    path: string;
}

export interface HeaderProps {
    title?: string;
    navItems?: NavItem[];
    renderNavItem?: (item: NavItem) => ReactNode; // Custom render function for links
    user?: { username: string; email: string } | null; // Pass user from the consuming app
    onLogout?: () => void;
}

export const Header = ({
    title,
    navItems,
    renderNavItem,
    user,
    onLogout }: HeaderProps): React.JSX.Element | null => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-[#00BA8D] shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo + Title */}
                    <div className="flex items-center space-x-3">
                        <Logo className="w-[50px] h-[20px]" />
                        {title && <h1 className="text-2xl font-bold text-white">{title}</h1>}
                    </div>

                    {/* Navigation - Uses custom render function */}
                    <nav className="flex items-center space-x-8">
                        {navItems?.map((item) =>
                            renderNavItem ? renderNavItem(item) : <span key={item.path}>{item.label}</span>
                        )}

                        {/* Profile Dropdown (only if user is authenticated) */}
                        {user && <ProfileWidget username={user.username} onLogout={onLogout} />}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
