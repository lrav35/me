export async function handleDynamicPost({ body }) {


	const message = body.message || 'default message';

	const htmlContent = `
	<tr>
		<td>
			${message}
		</td>
	</tr>
	`;

	// Return the modified HTML content
	return new Response(htmlContent, {
		headers: {
			'Content-Type': 'text/html',
		},
	});
}
