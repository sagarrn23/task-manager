import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ setModal }) => {
	return ReactDOM.createPortal(
		<div className="min-h-[400px] w-[500px] fixed top-[50%] left-[50%] flex justify-center items-center bg-black bg-opacity-25 rounded-default -translate-x-2/4 -translate-y-2/4 p-4">
			MOdal
			<FontAwesomeIcon
				icon={faTimes}
				size="2x"
				className="text-white cursor-pointer absolute top-[1rem] right-[1rem]"
				onClick={() => setModal(false)}
			/>
		</div>,
		modalRootEl
	);
};

export default React.memo(Modal);
