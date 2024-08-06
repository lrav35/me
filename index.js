import { Elysia } from 'elysia';
import staticPlugin from '@elysiajs/static';
import { handleDynamicPost } from './middlewares/dynamicPost';

const app = new Elysia()
	.use(staticPlugin({
		prefix: '/',
		assets: 'public',
		indexHTML: true,
	}))
	.listen(3000);

// serve content via str response
app.get('/dynamic-content', () => '<p>This content was loaded dynamically with hypermedia via htmx!!!</p>');

app.get('/pika', () => Bun.file('views/image.html'))

// serve content via file
app.post('/dynamic-post', (body) => handleDynamicPost(body));

console.log(`Elysia is running on port ${app.server.port}`);

