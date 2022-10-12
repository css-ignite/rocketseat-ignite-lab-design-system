import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: String;
}

export function Text({ size = 'md', children }: TextProps) {
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