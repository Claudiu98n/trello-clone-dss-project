import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { fetchBoard } from '../../api/api';
import CreateColumnModal from '../../modals/column/CreateColumnModal';
import ColumnsList from '../../components/ColumnList';

export default function Board({ board }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	if (!board) {
		return (
			<Container maxWidth="xl">
				<Box sx={{ py: 4 }}>
					<Typography variant="h6" component="h1">
						This board does not exist.
					</Typography>
				</Box>
			</Container>
		);
	}

	return (
		<Container maxWidth="xl">
			<Box sx={{ py: 4 }}>
				<Typography variant="h6" component="h1">
					Board: {board.title}
				</Typography>
				<Typography variant="subtitle2" component="h1">
					Created at: {new Date(board.createdAt).toLocaleDateString('ro-RO')}
				</Typography>
				<Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ my: 1 }}>
					Create column
				</Button>
				<ColumnsList columns={board.columns} />
			</Box>
			<CreateColumnModal open={open} handleClose={handleClose} id={board.id} />
		</Container>
	);
}

export async function getServerSideProps({ query }) {
	const bid = query.bid;
	let board = null;

	try {
		board = await fetchBoard(bid);
	} catch (err) {
		console.log(err);
	}

	return {
		props: {
			board: board?.data || null,
		},
	};
}
