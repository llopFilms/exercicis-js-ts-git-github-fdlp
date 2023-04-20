import CityQuiz from "./components/CityQuiz";
import CheckYouIn from "./components/CheckYouIn";
import Accordion from "./components/Accordion/Accordion";
import Messenger from "./components/Messenger";
import TaskApp from "./components/TaskApp/TaskApp";
import MessengerReducer from "./components/MessengerReducer";
import PageContext from "./components/PageContext";


const Maneig = () => (
	<div>
		<CityQuiz />
		<hr />
		<CheckYouIn/>
		<hr />
		<Accordion />
		<hr />
		<Messenger />
		<hr />
		<TaskApp/>
		<hr />
		<MessengerReducer />
		<hr />
		<PageContext />
		<hr />
	</div>
);

export default Maneig;
