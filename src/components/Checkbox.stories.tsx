import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {

    },
    argTypes: {

    },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">
                        Lembrar de mim por 30 dias
                    </Text>
                </div>
            )
        },
    ],
}

export const Small: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">
                        Lembrar de mim por 30 dias
                    </Text>
                </div>
            )
        },
    ],
}

export const Medium: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="md">
                        Lembrar de mim por 30 dias
                    </Text>
                </div>
            )
        },
    ],
}

export const Large: StoryObj<CheckboxProps> = {
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="lg">
                        Lembrar de mim por 30 dias
                    </Text>
                </div>
            )
        },
    ],
}