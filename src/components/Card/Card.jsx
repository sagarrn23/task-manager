import React from 'react';

function Card({ provided, item, snapshot }) {
	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="bg-white rounded-default drop-shadow-xl mb-4 p-2 hover:cursor-pointer"
			onClick={() => console.log(item)}
		>
			<p className="text-black font-bold">{item.title}</p>
		</div>
	);
}

export default React.memo(Card);
