import type { ButtonHTMLAttributes } from "react";

type SmartButtonProps = {
    variant?: 'primary' | 'ghost';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SmartButton({
    variant = 'primary',
    className,
    children,
    ...rest
} : SmartButtonProps) {
    const styles = variant === 'ghost' 
     ? 'border border-gray-400 text-gray-200'
     : 'bg-blue-600 text-white'; 

    return (
    <button className={`${styles} px-3 py-2 rounded ${className}`} 
    {...rest}>{children}</button>
    );
}