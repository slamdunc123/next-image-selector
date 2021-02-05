const ImageItem = ({ image, handleImageOnClick }) => {
	return (
		<>
			<img
				src={image.url + image.bgColor + '/' + image.color}
				onClick={() => handleImageOnClick(image.id)}
				style={{ cursor: 'pointer', margin: 5 }}
			/>
		</>
	);
};

export default ImageItem;
