import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { editColumn } from '../../api/api';
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

export default function EditColumnModal({ open, handleClose, id }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const handleEditColumn = async (event) => {
		event.preventDefault();
		const title = event.target[0].value;

		try {
			setLoading(true);
			const newColumn = await editColumn(id, title);

			if (newColumn.status === 200) {
				toast.success('Column edited successfully');
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
				onSubmit={handleEditColumn}
				component="form"
				display="flex"
				flexDirection="column"
				sx={style}
			>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Edit the column
				</Typography>
				<TextField
					sx={{ mt: 1 }}
					color="secondary"
					variant="standard"
					label="Enter column title..."
					required
				/>
				<Button
					disabled={loading}
					type="submit"
					sx={{ mt: 3 }}
					variant="outlined"
					color="secondary"
				>
					Edit
				</Button>
			</Box>
		</Modal>
	);
}
