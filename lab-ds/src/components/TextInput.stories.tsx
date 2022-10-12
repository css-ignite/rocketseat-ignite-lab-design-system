import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="placeholder" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    }
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {
  
}