const server = Bun.serve({
	host: 'localhost',
	port: 3000,
	fetch: handler,
});

console.log(`Listening on http://${server.hostname}:${server.port}`);

function handler(request) {
	const url = new URL(request.url);

	if (url.pathname === '' || url.pathname === '/')
		return new Response(Bun.file('index.html'));

	return new Response('Not Found', { status: 404 });
}
