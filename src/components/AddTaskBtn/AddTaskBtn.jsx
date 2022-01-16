import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function AddTaskBtn({ setModal }) {
	return (
		<div
			className="fixed rounded-full bg-teal-400 right-[2rem] bottom-[2rem] w-14 h-14 text-white flex justify-center items-center cursor-pointer drop-shadow-md"
			onClick={() => setModal(true)}
		>
			<FontAwesomeIcon icon={faPlus} size="1x" />
		</div>
	);
}

export default React.memo(AddTaskBtn);
