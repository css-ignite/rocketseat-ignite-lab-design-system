import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading MD',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        }
    }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
    args: {
        children: 'Heading Default',
    }
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
        children: 'Heading Small',
    }
}

export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'md',
        children: 'Heading Medium',
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        children: 'Heading Large',
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        size: 'md',
        asChild: true,
        children: (
            <h1>Custom Heading</h1>
        )
    },
}