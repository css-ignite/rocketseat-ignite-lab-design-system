import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            },
        }
    }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {

}