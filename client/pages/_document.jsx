import Document, { Html, Head, Main, NextScript } from 'next/document';

import * as snippet from '@segment/snippet';

class MyDocument extends Document {
	renderSnippet() {
		const opts = {
			apiKey: 'WrS0bwbPgnccg70eH56mpFny4qzdHxH8',
			page: true,
		};
		return snippet.max(opts);
	}

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
