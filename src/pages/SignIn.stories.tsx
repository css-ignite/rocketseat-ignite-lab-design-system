import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor  } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn'
import { rest } from 'msw';

export default {
    title: 'POages/Sign In',
    component: SignIn,
    args: {

    },
    argTypes: {

    },
    parameters: {
        msw: {
            handlers: [
                rest.post('/auth', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login Realizado!'
                    }));
                })
            ]
        }
    }
} as Meta;

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu melhor e-mail'),'claudneysartisessa@gmail.com');
        userEvent.type(canvas.getByPlaceholderText('******'),'12345678');

        userEvent.click(canvas.getByRole('button'));

        // Aguardando execução do evento
        await waitFor(() => {
            expect(canvas.getByText('Login Realizado!')).toBeInTheDocument();
        });
    }
}