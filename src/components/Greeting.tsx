import type { ReactNode } from "react";

type GreetingProps = {
    name: string;
    age?: number;
    isOnline?: boolean;
    children?: ReactNode;
};

export function Greeting({
    name,
    age = 18,
    isOnline = false,
    children,
} : GreetingProps) {
    return (
        <>
        <h3>Hello {name} {age}</h3>
        <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
        <div>{children}</div>
        </>
    );
}