import ChatRoom from "./components/ChatRoom";
import ChatRoomSelect from "./components/ChatRoomSelect";
import Comptador from "./components/Comptador";
import Comptador2 from "./components/Comptador2/Comptador2";
import FocusForm from "./components/FocusForm";
import Pilotetes from "./components/Pilotetes";
import VideoComp from "./components/VideoComp";

const GestioSenseEstat = () => (
	<div>
		<Comptador />
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
		<Pilotetes/>
	</div>
);

export default GestioSenseEstat;
