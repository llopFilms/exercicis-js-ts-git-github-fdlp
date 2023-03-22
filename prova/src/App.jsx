import Listing from "./components/Listing";

const llibres = [
	{
		id: 1,
		titol: "Enciclopedia",
		preu: "200€",
	},
	{
		id: 2,
		titol: "Novela",
		preu: "20€",
	},
	{
		id: 3,
		titol: "Comic",
		preu: "10€",
	},
];

function App() {

	const hanbdleClick = (e) => {
		alert("Aquí llibre " + e.target.id);
	};

	return (
		<div>
			<div>Hola App</div>
			<Listing llibres={llibres} hanbdleClick={hanbdleClick} />
		</div>
	);
}

export default App;


