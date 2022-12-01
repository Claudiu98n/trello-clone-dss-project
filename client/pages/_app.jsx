import React, { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import Layout from '../layouts/layout';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { uuid } = require('uuidv4');

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	useEffect(() => {
		const id = uuid();
		let userId;

		const lsId = localStorage.getItem('userId');
		if (lsId) {
			userId = lsId;
		} else {
			userId = id;
			localStorage.setItem('userId', id);
		}

		analytics.identify(userId, {
			time: new Date(Date.now()).toLocaleDateString('ro-RO'),
		});
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Trello Clone</title>
				<meta name="description" content="Trello Clone - DSS" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}
