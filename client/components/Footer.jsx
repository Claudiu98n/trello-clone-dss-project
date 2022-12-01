import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Footer() {
	return (
		<AppBar position="static" elevation={0} component="footer" color="secondary">
			<Toolbar style={{ justifyContent: 'center' }}>
				<Typography variant="caption">TRELLO CLONE - DSS</Typography>
			</Toolbar>
		</AppBar>
	);
}
