import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '../Card/Card';

function PanelDraggable({ item, index }) {
	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided, snapshot) => {
				return <Card provided={provided} item={item} snapshot={snapshot} />;
			}}
		</Draggable>
	);
}

export default React.memo(PanelDraggable);
