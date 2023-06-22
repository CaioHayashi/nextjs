"use client";
import { useAuth } from "./Auth";
import { useForm } from "react-hook-form";

export const ContextPage = () => {
	const { user, login, logout } = useAuth();

	const { register, handleSubmit } = useForm<{name: string}>();

    const handleLogin = ({name}: {name: string}) => {
        const userForm = {
            name,
            token: 'token'
        }

        login(userForm)
    }

	console.log(user);

	return (
		<div>
			<h3>Context Page</h3>
			<p>{user?.name}</p>
			<form onSubmit={handleSubmit(handleLogin)}>
				<input type="text" placeholder="informe seu nome" {...register('name')} />
				<button type="submit">entrar</button>
			</form>
			<button onClick={logout}>click</button>
		</div>
	);
};
