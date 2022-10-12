import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
    const component = asChild ? Slot : 'span';

    return (
        <span
            className={clsx(
                "text-gray-100 font-sans",
                {
                    "text-sm": size === 'sm',
                    "text-md": size === 'md',
                    "text-lg": size === 'lg',
                }
            )}
        >
            {children}
        </span>
    )
}