import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { store } from '../../store';
import { setTasks } from '../../services/setTasks';
import users from './../../data/users.json';
import { v4 as uuidv4 } from 'uuid';
import { toDataURL } from '../../services/utils';

const modalRootEl = document.getElementById('modal-root');

const Modal = () => {
	const globalState = useContext(store);
	const { dispatch, state } = globalState;
	const setModal = () => {
		dispatch({
			type: 'SET_MODAL_STATE',
			modalDisplay: false
		});
	};

	const changeHandler = (val, key) => {
		dispatch({
			type: 'SET_MODAL_DATA',
			updatedData: { ...state.modalData, [key]: val }
		});
	};

	const setUser = (e) => {
		let index = e.target.selectedIndex;
		let value = e.target.childNodes[index].getAttribute('data-id');
		changeHandler(value, 'userId');
		setSelectedUser(e.target.value);
	};

	const addNewTask = () => {
		dispatch({
			type: 'ADD_NEW_TASK',
			newTask: { ...state.modalData }
		});
		setModal();
	};

	const updateTask = () => {
		dispatch({
			type: 'UPDATE_TASK',
			updateTask: { ...state.modalData }
		});
		setModal();
	};

	const imageData = async (e) => {
		const files = e.target.files;
		const imageArr = [];

		const getBase64 = async (file) => {
			return new Promise((resolve, reject) => {
				var reader = new FileReader();

				reader.onload = () => {
					resolve(reader.result);
				};
				reader.readAsDataURL(file);
			});
		};
		for (const file of files) {
			await getBase64(file).then((res) => {
				imageArr.push(res);
			});
		}
		changeHandler(imageArr, 'images');
	};

	useEffect(() => {
		setTasks(state.tasks);
	}, [state.tasks]);

	const [selectedUser, setSelectedUser] = useState('');

	return ReactDOM.createPortal(
		<div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50">
			<div className="min-h-[400px] w-[500px] absolute top-[50%] left-[50%] flex flex-col justify-top items-top bg-stone-50 rounded-default -translate-x-2/4 -translate-y-2/4 gap-4 p-4 pt-16 border-default border-stone-400 drop-shadow-xl">
				<div className="w-full flex flex-col">
					<label className="font-bold" htmlFor="title">
						Title
					</label>
					<input
						id="title"
						type="text"
						value={state.modalData.title}
						onChange={(e) => changeHandler(e.target.value, 'title')}
						className="bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 outline-none"
					/>
				</div>
				<div className="w-full flex flex-col">
					<label className="font-bold" htmlFor="description">
						Description
					</label>
					<textarea
						name="description"
						id="description"
						value={state.modalData.description}
						onChange={(e) => changeHandler(e.target.value, 'description')}
						className="bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 resize-none outline-none"
					></textarea>
				</div>
				<div className="w-full flex flex-col">
					<label className="font-bold" htmlFor="images">
						Images
					</label>
					<input
						type="file"
						id="images"
						name="img"
						accept="image/*"
						className="cursor-pointer"
						multiple="multiple"
						onChange={(e) => imageData(e)}
					/>
					<div className="grid gap-2 grid-cols-4 mt-2">
						{state.modalData.images.map((image, index) => (
							<div className="h-m max-h-[4rem]" key={uuidv4()}>
								<img
									src={image}
									alt=""
									className="w-full h-full object-cover object-top"
								/>
							</div>
						))}
					</div>
				</div>
				<div className="w-full flex flex-col">
					<label className="font-bold" htmlFor="user">
						Assign to
					</label>
					<select
						name="user"
						id="user"
						className="bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 cursor-pointer"
						onChange={(e) => setUser(e)}
						value={selectedUser}
						selected={selectedUser}
					>
						{users.map((user) => (
							<option data-id={user.id} value={user.firstName} key={uuidv4()}>
								{user.firstName}
							</option>
						))}
					</select>
				</div>
				<div className="w-full flex flex-col">
					<label className="font-bold" htmlFor="title">
						Due Date
					</label>
					<input
						id="title"
						type="date"
						value={state.modalData.dueDate}
						onChange={(e) => changeHandler(e.target.value, 'dueDate')}
						className="bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 outline-none"
					/>
				</div>
				<div className="w-full flex flex-col">
					<button
						className="py-4 px-8 bg-teal-400 text-white hover:bg-teal-500 font-bold"
						onClick={state.updating ? updateTask : addNewTask}
						disabled={state.modalData.title.length ? false : true}
						style={{
							backgroundColor: !state.modalData.title.length ? '#eee' : null
						}}
					>
						{state.updating ? 'Update Task' : 'Add Task'}
					</button>
				</div>
				<FontAwesomeIcon
					icon={faTimes}
					size="2x"
					className="text-stone-500 cursor-pointer absolute top-[1rem] right-[1rem]"
					onClick={setModal}
				/>
			</div>
		</div>,
		modalRootEl
	);
};

export default React.memo(Modal);
