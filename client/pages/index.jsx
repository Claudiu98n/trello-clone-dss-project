import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BoardsList from '../components/BoardsList';
import { fetchBoards } from '../api/api';
import CreateBoardModal from '../modals/board/CreateBoardModal';

export default function Home({ boards }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Container maxWidth="xl">
			<Box sx={{ py: 4 }}>
				<Typography variant="h6" component="h1">
					Welcome to Trello Clone!
				</Typography>
				<Typography variant="subtitle2" component="p">
					You might want to create a new board and give it a name, change the name of an existing
					board, delete a board, and open a board to see its contents
				</Typography>
				<Button onClick={handleOpen} color="secondary" variant="outlined" sx={{ my: 1 }}>
					Create board
				</Button>
				<BoardsList boards={boards} />
			</Box>
			<CreateBoardModal open={open} handleClose={handleClose} />
		</Container>
	);
}

export async function getServerSideProps() {
	const boards = await fetchBoards();

	return {
		props: {
			boards: boards?.data?.results || [],
		},
	};
}
