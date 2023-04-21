const ImagePlace = ({ imageId, name, imageSize }) => {
	console.log(imageSize);
	return (
		<img
			src={imageId}
			alt={name}
			style={{ width: { imageSize }, height: { imageSize } }}
		/>
	);
};

export default ImagePlace;
