import React, { useState, useContext, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import PanelDroppable from './PanelDroppable';
import { store } from '../../store';

const onDragEnd = (result, columns, setColumns, dispatch) => {
	if (!result.destination) return;
	const { draggableId, source, destination } = result;
	if (source.droppableId !== destination.droppableId) {
		dispatch({
			type: 'UPDATE_STATUS',
			newStatus: columns[destination.droppableId].key,
			taskId: draggableId
		});
	}

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
	const globalState = useContext(store);
	const { dispatch, state } = globalState;

	// to change the status of the task
	const itemsFromBackend = (status) =>
		state.tasks.filter((item) => item.status === status);

	const panelColumns = {
		1: {
			name: 'To do',
			key: 'to-do',
			items: itemsFromBackend('to-do')
		},
		2: {
			name: 'In Progress',
			key: 'in-progress',
			items: itemsFromBackend('in-progress')
		},
		3: {
			name: 'In Review',
			key: 'in-review',
			items: itemsFromBackend('in-review')
		},
		4: {
			name: 'Done',
			key: 'done',
			items: itemsFromBackend('done')
		}
	};
	const [columns, setColumns] = useState({});
	useEffect(() => {
		setColumns(panelColumns);
	}, [state]);
	return (
		<div className="flex h-full overflow-auto">
			<DragDropContext
				onDragEnd={(result) => onDragEnd(result, columns, setColumns, dispatch)}
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
