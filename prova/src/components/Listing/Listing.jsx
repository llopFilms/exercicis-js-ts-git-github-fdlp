import { Element } from "./Listing.styles";

const Listing = ({ llibres, hanbdleClick }) => {
	return (
		<div>
			<div>Listing</div>
			{llibres.map((llibre) => (
				<Element key={llibre.id}>
					<button onClick={hanbdleClick} id={llibre.id}>
						Clica
					</button>
					<span>{llibre.id}</span>
					<span>{llibre.titol}</span>
					<span>{llibre.preu}</span>
				</Element>
			))}
		</div>
	);
};

export default Listing;
