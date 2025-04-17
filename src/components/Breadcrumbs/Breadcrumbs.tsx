import { JSX, ComponentType } from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

interface BreadcrumbProps {
    pages: {
        label: string;
        href: string;
        current?: boolean;
    }[];
    LinkComponent?: ComponentType<{ href: string; children: JSX.Element }>; // Allow custom Link component
}

export const Breadcrumbs = ({ pages, LinkComponent }: BreadcrumbProps): JSX.Element | null => {
    return (
        <nav aria-label="Breadcrumb" className="flex">
            <ol role="list" className="flex items-center space-x-2">
                {/* Home Icon */}
                <li>
                    <div>
                        {LinkComponent ? (
                            <LinkComponent href="/">
                                <>
                                    <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                                    <span className="sr-only">Home</span>
                                </>
                            </LinkComponent>
                        ) : (
                            <a href="/" className="text-gray-400 hover:text-gray-500">
                                <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                                <span className="sr-only">Home</span>
                            </a>
                        )}
                    </div>
                </li>

                {/* Breadcrumb Pages */}
                {pages.map((page, index) => {
                    const isLast = index === pages.length - 1;

                    return (
                        <li key={page.href}>
                            <div className="flex items-center">
                                <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />

                                {/* Last item should NOT be a link */}
                                {isLast ? (
                                    <span
                                        aria-current="page"
                                        className="ml-2 text-sm font-medium text-gray-500"
                                    >
                                        {page.label}
                                    </span>
                                ) : LinkComponent ? (
                                    <LinkComponent href={page.href}>
                                        <span className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                                            {page.label}
                                        </span>
                                    </LinkComponent>
                                ) : (
                                    <a
                                        href={page.href}
                                        className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    >
                                        {page.label}
                                    </a>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
