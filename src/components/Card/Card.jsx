import React from 'react';

function Card({ provided, item, snapshot }) {
	return (
		<div
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className="bg-white rounded-default drop-shadow-xl mb-4 p-2 hover:cursor-pointer"
			// style={{
			// 	backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
			// }}
		>
			<p className="text-black font-bold">{item.content}</p>
		</div>
	);
}

export default React.memo(Card);
