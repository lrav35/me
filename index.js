import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

const app = new Elysia()
	.use(html())
	.get('/', () => Bun.file('./views/index.html'))
	.get('/dynamic-content', () => '<p> this content was loaded dynamically via htmx</p>')
	.listen(3000);

console.log(`Elysia is running on port ${app.server.port}`);

