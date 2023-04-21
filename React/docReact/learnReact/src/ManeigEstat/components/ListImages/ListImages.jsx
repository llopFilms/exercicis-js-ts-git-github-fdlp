import Place from "../Place";


const ListImages = ({ imageSize, places }) => (
	<div>
		{places.map(({ id, ...place }) => (
			<div key={id}>
				<Place imageSize={imageSize} {...place} />
			</div>
		))}
	</div>
);

export default ListImages;
