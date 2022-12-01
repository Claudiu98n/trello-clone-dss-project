import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { deleteColumn } from '../../api/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

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

export default function DeleteColumnModal({ open, handleClose, id }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const handleDeleteColumn = async () => {
		try {
			setLoading(true);
			const columns = await deleteColumn(id);

			if (columns.status === 200) {
				refreshData();
				toast.success('Column deleted successfully');
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
			<Box display="flex" flexDirection="column" sx={style}>
				<Typography>Are you sure you want to delete the column?</Typography>
				<Box mt={3} display="flex" gap={3}>
					<Button
						onClick={handleDeleteColumn}
						disabled={loading}
						variant="outlined"
						color="secondary"
					>
						Delete
					</Button>
					<Button onClick={handleClose} variant="outlined" color="primary">
						No
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
