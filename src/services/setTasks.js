export const setTasks = (data) => {
	localStorage.setItem('tasksDB', JSON.stringify(data));
};
