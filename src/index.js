import { Elysia } from "elysia";

const app = new Elysia()
	.get('/', () => 'Hello, from Elysia!')
	.listen(3000);

console.log(`Elysia is running on port ${app.server.port}`);
