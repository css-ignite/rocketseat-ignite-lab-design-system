import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text',
        size: 'md',
        asChild: false,
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
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {

}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Text Small',
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md',
        children: 'Text Medium',
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        children: 'Text Large',
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        size: 'md',
        asChild: true,
        children: (
            <p>Custom Text</p>
        )
    }
}