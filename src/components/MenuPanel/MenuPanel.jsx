import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
	faDotCircle,
	faHome,
	faThLarge,
	faUser,
	faClock,
	faComment
} from '@fortawesome/free-solid-svg-icons';

const icons = [
	{
		icon: faHome,
		route: '/'
	},
	{
		icon: faThLarge,
		route: '/board'
	},
	{
		icon: faUser,
		route: '/'
	},
	{
		icon: faClock,
		route: '/'
	},
	{
		icon: faComment,
		route: '/'
	}
];

function MenuPanel() {
	return (
		<div className="h-full flex justify-center items-center	bg-teal-400 flex-col p-2">
			<Link to="/" className="p-2 mb-2">
				<FontAwesomeIcon icon={faDotCircle} size="2x" inverse fixedWidth />
			</Link>
			{icons.map((item) => (
				<NavLink
					to={item.route}
					exact
					className={(isActive) =>
						'p-2 mb-2 ' + (isActive ? 'bg-teal-500 rounded-lg' : '')
					}
					key={uuidv4()}
				>
					<FontAwesomeIcon icon={item.icon} size="2x" inverse fixedWidth />
				</NavLink>
			))}
		</div>
	);
}

export default React.memo(MenuPanel);
