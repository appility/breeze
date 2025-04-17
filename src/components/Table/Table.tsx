import React from "react";
import { ChevronUpIcon } from '@heroicons/react/24/solid';

// Generic Table Props
interface TableProps<T> {
    data: T[];
    renderHeader: () => React.ReactNode;
    renderRow: (
      item: T,
      index: number
    ) => { children: React.ReactNode; onClick?: () => void; className?: string };
  }

export function TableRoot<T>({ data, renderHeader, renderRow }: TableProps<T>) {
    return (
        <div className="relative w-full">
            <div className="overflow-x-auto md:overflow-visible">
                <table className="min-w-full bg-white divide-y divide-gray-200 border border-gray-200 shadow-md rounded-lg">
                <thead className="bg-gray-50 select-none">
                    <TableRow>{renderHeader()}</TableRow>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.length > 0 ? (
                    data.map((item, index) => {
                    const { children, onClick, className } = renderRow(item, index);
                    return (
                        <TableRow key={index} onClick={onClick} className={className}>
                        {children}
                        </TableRow>
                    );
                    })
                ) : (
                    <TableRow>
                    <TableCell colSpan={100} className="text-center text-gray-500 py-4">
                        No data available
                    </TableCell>
                    </TableRow>
                )}
                </tbody>
                </table>
            </div>
        </div>
    );
}

// Table Row Component
export function TableRow({
    children,
    onClick,
    className = "",
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) {
    return (
      <tr
        onClick={onClick}
        className={`hover:bg-gray-100 ${onClick ? "cursor-pointer" : ""} ${className}`}
      >
        {children}
      </tr>
    );
  }

// Table Header Cell Component
interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    align?: "left" | "center" | "right";
}

export function TableHeader({ children, align = "left", className = "", ...props }: TableHeaderProps) {
    const alignmentClass = className || (align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left");

    return (
        <th
            className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase ${alignmentClass} bg-gray-50`}
            {...props}
        >
            {children}
        </th>
    );
}

// Table Data Cell Component
export function TableCell({ children, className = "", ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
    return (
        <td className={`px-6 py-4 text-gray-900 whitespace-nowrap ${className}`} {...props}>
            {children}
        </td>
    );
}

// Sortable Header Component
type SortDirection = "asc" | "desc" | null;

interface SortableHeaderProps<T> {
    label: string;
    field: keyof T;
    sortBy: keyof T | null;
    sortDirection: SortDirection;
    setSort: (field: keyof T | null, direction: SortDirection) => void;
}

export function SortableHeader<T>({ label, field, sortBy, sortDirection, setSort }: SortableHeaderProps<T>): React.JSX.Element | null {
    const isActive = sortBy === field;
    const nextDirection: SortDirection = !isActive ? "asc" : sortDirection === "asc" ? "desc" : null;

    return (
        <TableHeader
            onClick={() => setSort(field, nextDirection)}
            className={`cursor-pointer px-6 py-3 text-xs font-medium text-gray-500 uppercase
                ${isActive ? "text-gray-700 font-bold" : "text-gray-500"} transition-colors`}
        >
            <div className="flex items-center space-x-2">
                <span>{label}</span>
                <span className="relative w-4 h-4 flex items-center justify-center">
                    {isActive && (
                        <ChevronUpIcon
                            className={`size-4 text-gray-800 ${sortDirection === "asc" ? "rotate-180" : ""}`}
                        />
                    )}
                </span>
            </div>
        </TableHeader>
    );
}


export default TableRoot;
