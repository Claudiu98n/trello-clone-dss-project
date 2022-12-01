import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { deleteContent } from '../../api/api';
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

export default function DeleteContentModal({ open, handleClose, id }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const refreshData = () => {
		router.replace(router.asPath);
	};

	const handleDeleteContent = async () => {
		try {
			setLoading(true);
			const contents = await deleteContent(id);

			if (contents.status === 200) {
				refreshData();
				toast.success('Content card deleted successfully');
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
				<Typography>Are you sure you want to delete the content card?</Typography>
				<Box mt={3} display="flex" gap={3}>
					<Button
						onClick={handleDeleteContent}
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
