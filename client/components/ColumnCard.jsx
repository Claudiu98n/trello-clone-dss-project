import React, { useState } from 'react';
import { Card, Button, CardContent, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteColumnModal from '../modals/column/DeleteColumnModal';
import EditColumnModal from '../modals/column/EditColumnModal';
import ContentList from './ContentList';
import AddContentModal from '../modals/content/AddContentModal';

export default function ColumnCard({ id, title, contents }) {
	const [openDelete, setOpenDelete] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

	const handleOpenEdit = () => setOpenEdit(true);
	const handleCloseEdit = () => setOpenEdit(false);

	const handleOpenDelete = () => setOpenDelete(true);
	const handleCloseDelete = () => setOpenDelete(false);

	const handleOpenCreate = () => setOpenCreate(true);
	const handleCloseCreate = () => setOpenCreate(false);

	return (
		<>
			<Card
				sx={{
					width: 275,
					minHeight: 500,
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
					<Button onClick={handleOpenCreate} sx={{ width: '100%', my: 1 }}>
						Add Content
					</Button>
					<ContentList contents={contents} />
				</CardContent>
			</Card>

			<EditColumnModal open={openEdit} handleClose={handleCloseEdit} id={id} />
			<DeleteColumnModal open={openDelete} handleClose={handleCloseDelete} id={id} />
			<AddContentModal open={openCreate} handleClose={handleCloseCreate} id={id} />
		</>
	);
}
