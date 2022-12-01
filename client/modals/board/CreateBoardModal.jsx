import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { createBoard } from '../../api/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

export default function CreateBoardModal({ open, handleClose }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const handleCreateBoard = async (event) => {
		event.preventDefault();
		const title = event.target[0].value;

		try {
			setLoading(true);
			const newBoard = await createBoard(title);

			if (newBoard.status === 200) {
				toast.success('Board created successfully');
				handleClose();
				refreshData();
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				onSubmit={handleCreateBoard}
				component="form"
				display="flex"
				flexDirection="column"
				sx={style}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Create a board
				</Typography>
				<TextField
					sx={{ mt: 1 }}
					color="secondary"
					variant="standard"
					label="Enter board title..."
					required
				/>
				<Button
					disabled={loading}
					type="submit"
					sx={{ mt: 3 }}
					variant="outlined"
					color="secondary"
				>
					Create
				</Button>
			</Box>
		</Modal>
	);
}
