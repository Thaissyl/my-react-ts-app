import type { ReactNode } from "react";

const VARIANT_CLASS = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-800 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
} as const;

type Variant = keyof typeof VARIANT_CLASS;

type ButtonProps = {
    variant?: Variant;
    children: ReactNode;
    onClick?: () => void;
}



export function MyButton({
    variant = 'primary',
    children,
    onClick,
} : ButtonProps) {
    return <button onClick={onClick} 
    className={`px-4 py-2 rounded ${VARIANT_CLASS[variant]}`}>{children}</button>;
}