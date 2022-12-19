import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link';

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<Link href="/">
						<Paper sx={{ p: 0.5, cursor: 'pointer' }}>
							<Box display="flex" alignItems="center">
								<DashboardIcon sx={{ mr: 2 }} />
								<Typography variant="h6" component="div">
									Boards
								</Typography>
							</Box>
						</Paper>
					</Link>
					<Typography sx={{ ml: 'auto' }}>Welcome!</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
