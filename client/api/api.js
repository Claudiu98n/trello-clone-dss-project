import axios from 'axios';

// board endpoints
export async function fetchBoards() {
	const boards = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/boards`);

	return boards;
}

export async function createBoard(title) {
	const newBoard = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/boards`, {
		title,
	});

	global.analytics.track('Create board', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return newBoard;
}

export async function editBoard(id, title) {
	const newBoard = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/board/${id}`, {
		title,
	});

	global.analytics.track('Edit board', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return newBoard;
}

export async function deleteBoard(id) {
	const boards = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/board/${id}`);

	global.analytics.track('Delete board', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return boards;
}

export async function fetchBoard(id) {
	const board = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/board/${id}`);

	return board;
}
// end of board endpoints

// column endpoints
export async function createColumn(id, title) {
	const newColumn = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/columns`, {
		id,
		title,
	});

	global.analytics.track('Create column', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return newColumn;
}

export async function editColumn(id, title) {
	const newColumn = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/column/${id}`, {
		title,
	});

	global.analytics.track('Edit column', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return newColumn;
}

export async function deleteColumn(id) {
	const columns = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/column/${id}`);

	global.analytics.track('Delete column', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return columns;
}
// end of column endpoints

// content endpoints
export async function createContent(id, title, description) {
	const contents = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/contents`, {
		id,
		title,
		description,
	});

	global.analytics.track('Create content', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return contents;
}

export async function editContent(id, title, description) {
	const contents = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content/${id}`, {
		title,
		description,
	});

	global.analytics.track('Edit content', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return contents;
}

export async function deleteContent(id) {
	const contents = await axios.delete(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content/${id}`
	);

	global.analytics.track('Delete content', {
		id: localStorage.getItem('userId'),
		time: new Date(Date.now()).toLocaleDateString('ro-RO'),
	});
	return contents;
}
// end of content endpoints
