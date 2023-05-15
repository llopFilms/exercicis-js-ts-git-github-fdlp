import ChatRoom from "./components/ChatRoom";
import ChatRoomSelect from "./components/ChatRoomSelect";
import Comptador from "./components/Comptador";
import Comptador2 from "./components/Comptador2/Comptador2";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import FocusForm from "./components/FocusForm";
import Pilotetes from "./components/Pilotetes";
import SendChat from "./components/SendChat";
import StopWatch from "./components/StopWatch";
import VideoComp from "./components/VideoComp";

const GestioSenseEstat = () => (
	<div>
		{/*<Comptador />
		<hr />
		<Comptador2 />
		<hr />
		<FocusForm />
		<hr />
		<VideoComp />
		<hr />
		<ChatRoom />
		<hr />
		<ChatRoomSelect />
		<hr />
		<Pilotetes />
		<hr />*/}
		<StopWatch />
		<hr />
		<SendChat />
		<hr />
		<Dashboard />
		<hr />
		<Dashboard2 />
		<hr />
	</div>
);

export default GestioSenseEstat;
