export const getTasks = () => {
	const storedTasks = localStorage.getItem('tasksDB');
	return JSON.parse(storedTasks);
};
