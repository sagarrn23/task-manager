import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<div className="flex justify-center">
			<h1 className="font-bold text-2xl text-blue-900">
				<FontAwesomeIcon icon={faCoffee} /> React and Tailwind with Vitejs!
			</h1>
		</div>
	);
}

export default App;
