import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PanelDraggable from './PanelDraggable';

function PanelDroppable({ columnId, column }) {
	return (
		<Droppable droppableId={columnId} key={columnId}>
			{(provided, snapshot) => {
				return (
					<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						className="md:h-full w-full"
					>
						{column.items.map((item, index) => {
							return <PanelDraggable item={item} index={index} key={item.id} />;
						})}
						{provided.placeholder}
					</div>
				);
			}}
		</Droppable>
	);
}

export default React.memo(PanelDroppable);
