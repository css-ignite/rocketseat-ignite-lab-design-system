import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Checkbox({ }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            className={clsx(
                "w-6 h-6 p-[2px]",
                "bg-gray-800 rounded",
            )}
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}