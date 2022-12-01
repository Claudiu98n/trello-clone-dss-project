import { Box, Typography } from '@mui/material';
import React from 'react';
import ColumnCard from './ColumnCard';

export default function ColumnList({ columns }) {
	if (columns.length > 0) {
		return (
			<Box display="flex" gap={5} my={3} flexWrap="wrap">
				{columns.map((column) => (
					<ColumnCard
						key={column.id}
						id={column.id}
						title={column.title}
						contents={column.contents}
					/>
				))}
			</Box>
		);
	}

	return <Typography sx={{ mt: 3 }}>No available Columns.</Typography>;
}
