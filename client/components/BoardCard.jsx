import React, { useState } from 'react';
import { Card, Button, CardActions, CardContent, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteBoardModal from '../modals/board/DeleteBoardModal';
import EditBoardModal from '../modals/board/EditBoardModal';
import Link from 'next/link';

export default function BoardCard({ id, title }) {
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
					width: 275,
					background: 'lightgrey',
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
				</CardContent>
				<CardActions>
					<Link href={`/boards/${id}`}>
						<Button variant="contained" color="secondary" size="small">
							Show content
						</Button>
					</Link>
				</CardActions>
			</Card>

			<EditBoardModal open={openEdit} handleClose={handleCloseEdit} id={id} />
			<DeleteBoardModal open={openDelete} handleClose={handleCloseDelete} id={id} />
		</>
	);
}
