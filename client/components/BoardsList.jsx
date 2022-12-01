import { Box, Typography } from '@mui/material';
import React from 'react';
import BoardCard from './BoardCard';

export default function BoardsList({ boards }) {
	if (boards.length > 0) {
		return (
			<Box display="flex" gap={5} my={3} flexWrap="wrap">
				{boards.map((board) => (
					<BoardCard key={board.id} id={board.id} title={board.title} />
				))}
			</Box>
		);
	}

	return <Typography sx={{ mt: 3 }}>No available Boards.</Typography>;
}
