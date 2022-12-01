import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditContentModal from '../modals/content/EditContentModal';
import DeleteContentModal from '../modals/content/DeleteContentModal';

export default function ContentCard({ id, title, description }) {
	const [openDelete, setOpenDelete] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);

	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);

	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	return (
		<>
			<Card
				sx={{
					width: '100%',
					background: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<CardContent>
					<Box display="flex" alignItems="center" justifyContent="space-between">
						<Typography variant="title" sx={{ mr: 1 }}>
							{title}
						</Typography>
						<Box display="flex">
							<IconButton onClick={handleOpenEdit}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={handleOpenDelete}>
								<DeleteIcon />
							</IconButton>
						</Box>
					</Box>
					<Typography variant="title" sx={{ mr: 1 }}>
						{description.length > 50 ? description.slice(0, 50) + '...' : description}
					</Typography>
				</CardContent>
			</Card>

			<EditContentModal open={openEdit} handleClose={handleCloseEdit} id={id} />
			<DeleteContentModal open={openDelete} handleClose={handleCloseDelete} id={id} />
		</>
	);
}
