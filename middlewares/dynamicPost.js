export async function handleDynamicPost({ ctx }) {

	const body = await ctx.json();
	// Extract the message from the request body
	const message = body.message || 'default message';

	console.log(body);

	// Generate dynamic HTML with the modified message
	const htmlContent = `
        <div class="image-container">
            <img src="img/pika.png" alt="pikachu" style="width: 150px; margin-top: 10px;">
            <div class="caption">${message}</div>
        </div>
    `;

	// Return the modified HTML content
	return new Response(htmlContent, {
		headers: {
			'Content-Type': 'text/html',
		},
	});
}
