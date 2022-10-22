import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

import { Logo } from "./Logo";
import { Envelope, Lock } from "phosphor-react";
import { clsx } from "clsx";

import "./styles/global.css";

export function App() {
  return (
    <div
      className={clsx(
        "w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100"
      )}
    >
      <header className={clsx("flex flex-col items-center")}>
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>

      <form
        className={clsx(
          "flex flex-col items-stretch mt-8 w-full max-w-sm gap-3"
        )}
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              placeholder="Digite seu melhor e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" placeholder="******" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex flex-row items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-8">
          Entrar na plataforma
        </Button>
      </form>

      <footer className={clsx("flex flex-col items-center gap-4 mt-8")}>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
