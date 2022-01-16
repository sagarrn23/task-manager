import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ setModal }) => {
	return ReactDOM.createPortal(
		<div className="min-h-[400px] w-[500px] fixed top-[50%] left-[50%] flex flex-col justify-top items-top bg-white rounded-default -translate-x-2/4 -translate-y-2/4 gap-4 p-4 pt-16 border-default border-stone-400 drop-shadow-xl">
			<div className="w-full flex flex-col">
				<label className="font-bold" htmlFor="title">
					Title
				</label>
				<input
					id="title"
					type="text"
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
				/>
			</div>
			<div className="w-full flex flex-col">
				<label className="font-bold" htmlFor="user">
					Assign to
				</label>
				<select
					name="user"
					id="user"
					className="bg-stone-200 border-default border-stone-400 rounded-sm leading-normal p-2 cursor-pointer"
				>
					<option value="Sagar">Sagar</option>
					<option value="Shailu">Shailu</option>
					<option value="Priti">Priti</option>
					<option value="Ajay">Ajay</option>
					<option value="Namrata">Namrata</option>
				</select>
			</div>
			<div className="w-full flex flex-col">
				<button
					className="py-4 px-8 bg-teal-500 text-white hover:bg-teal-400 font-bold"
					onClick={() => setModal(false)}
				>
					Add Task
				</button>
			</div>
			<FontAwesomeIcon
				icon={faTimes}
				size="2x"
				className="text-stone-500 cursor-pointer absolute top-[1rem] right-[1rem]"
				onClick={() => setModal(false)}
			/>
		</div>,
		modalRootEl
	);
};

export default React.memo(Modal);
