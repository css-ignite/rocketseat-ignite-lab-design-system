import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text MD',
        size: 'md',
    }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
    args: {
        children: 'Text Default',
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md',
        children: 'Text Medium',
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Text Small',
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