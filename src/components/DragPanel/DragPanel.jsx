import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import PanelDroppable from './PanelDroppable';

const itemsFromBackend = [
	{ id: uuidv4(), content: 'First task' },
	{ id: uuidv4(), content: 'Second task' },
	{ id: uuidv4(), content: 'Third task' },
	{ id: uuidv4(), content: 'Fourth task' },
	{ id: uuidv4(), content: 'Fifth task' }
];

const columnsFromBackend = {
	[uuidv4()]: {
		name: 'To do',
		items: itemsFromBackend
	},
	[uuidv4()]: {
		name: 'In Progress',
		items: []
	},
	[uuidv4()]: {
		name: 'In Review',
		items: []
	},
	[uuidv4()]: {
		name: 'Done',
		items: []
	}
};

const onDragEnd = (result, columns, setColumns) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems
			}
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems
			}
		});
	}
};

const DragPanel = () => {
	const [columns, setColumns] = useState(columnsFromBackend);
	return (
		<div className="flex h-full overflow-auto">
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
			>
				{Object.entries(columns).map(([columnId, column], index) => {
					return (
						<div
							className="flex flex-col items-center py-2 mx-2 grow-1 min-w-[340px] max-w-[340px] bg-teal-100 rounded-lg"
							key={columnId}
						>
							<h2 className="text-left w-full px-2 font-bold">{column.name}</h2>
							<div className="p-2 h-full w-full">
								<PanelDroppable columnId={columnId} column={column} />
							</div>
						</div>
					);
				})}
			</DragDropContext>
		</div>
	);
};

export default React.memo(DragPanel);
