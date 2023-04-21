import ImagePlace from "../ImagePlace";

const Place = ({ name, description, imageId, imageSize }) => (
	<div className="place">
		<ImagePlace imageId={imageId} name={name} imageSize={imageSize} />
		<p>
			<b>{name}: </b>
			{description}
		</p>
	</div>
);

export default Place;
