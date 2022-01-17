import { faBell, faComment } from '@fortawesome/free-regular-svg-icons';
import {
	faCheck,
	faPaperclip,
	faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { store } from '../../store';
import users from './../../data/users.json';

function Card({ provided, item, snapshot }) {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	const updateTask = () => {
		dispatch({
			type: 'SET_MODAL_STATE',
			modalDisplay: true
		});
		dispatch({
			type: 'TASK_EDIT_STATUS',
			value: true
		});
		const taskToEdit = state.tasks.filter((task) => task.id === item.id)[0];
		dispatch({
			type: 'SET_MODAL_DATA',
			updatedData: {
				...taskToEdit
			}
		});
	};

	const userAvatar = (id) => {
		const avatar = users.filter((user) => user.id === +id)[0];
		return avatar.avatar;
	};

	const infoLabel = (icon, content, bg = 'bg-stone-200') => {
		const classes = `py-1 px-2 ${bg} text-black flex gap-1 justify-center items-center rounded-default`;
		return content ? (
			<span className={classes}>
				<FontAwesomeIcon icon={icon} size="sm" />
				{content}
			</span>
		) : null;
	};

	const dueDateCell = (dueDt) => {
		const dateParts = dueDt.split('-');
		const monthNames = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

		const date = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);

		return date.getDate()
			? `${monthNames[date.getMonth()]}, ${date.getDate()}`
			: null;
	};

	const bgColor = ({ status, dueDate }) => {
		if (status === 'done') return 'bg-blue';

		const dateParts = dueDate.split('-');
		const date = +new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);

		if (date < +new Date()) return 'bg-red';
		if (date - +new Date() > 86400000 * 7) return 'bg-yellow';
		if (date - +new Date() > 86400000 * 2) return 'bg-orange';
		return 'bg-stone-200';
	};

	const removeTask = (e, id) => {
		e.stopPropagation();
		dispatch({
			type: 'REMOVE_TASK',
			taskId: id
		});
	};

	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="group relative bg-stone-50 rounded-default drop-shadow-xl mb-4 p-3 hover:cursor-pointer"
			onClick={updateTask}
		>
			<p className="text-black font-bold capitalize">{item.title}</p>
			<span className="absolute right-[0.75rem] top-[0.75rem] hidden group-hover:inline transition-all text-red">
				<FontAwesomeIcon
					icon={faTrash}
					size="sm"
					onClick={(e) => removeTask(e, item.id)}
				/>
			</span>
			{item.images.length ? (
				<div className="my-4 -mx-3">
					<img
						src={item.images[0]}
						alt="Task attachment"
						className="w-full max-h-[300px] object-cover object-top"
					/>
				</div>
			) : null}
			<div className="flex justify-between mt-4">
				<div className="flex gap-2">
					{infoLabel(
						item.status === 'done' ? faCheck : faBell,
						dueDateCell(item.dueDate),
						bgColor(item)
					)}
					{infoLabel(faPaperclip, item.images.length)}
					{infoLabel(faComment, '5')}
				</div>
				<div className="w-[30px]">
					<img
						className="w-full rounded-default"
						src={userAvatar(item.userId)}
						alt="User Image"
					/>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Card);
