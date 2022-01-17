import React from 'react';

function Header() {
	return (
		<div className="text-center text-xl font-bold p-2 border-b-2 border-b-solid border-b-teal-400">
			Task Board
		</div>
	);
}

export default React.memo(Header);
