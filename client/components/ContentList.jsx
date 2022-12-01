import { Box, Typography } from '@mui/material';
import React from 'react';
import ContentCard from './ContentCard';

export default function ContentList({ contents }) {
	if (contents.length > 0) {
		return (
			<Box display="flex" flexDirection="column" gap={1.5}>
				{contents.map((content) => (
					<ContentCard
						key={content.id}
						id={content.id}
						title={content.title}
						description={content.description}
					/>
				))}
			</Box>
		);
	}

	return <Typography>No available Contents.</Typography>;
}
