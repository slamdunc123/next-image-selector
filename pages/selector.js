import { useState } from 'react';
import ImageItem from '../components/ImageItem';
import { imageData } from '../data/imageData';

const selector = () => {
	const [imageId, setImageId] = useState(0);

	const handleImageOnClick = (id) => {
		setImageId(id - 1);
	};
	return (
		<div>
			<h3>Image Selector</h3>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div style={{ display: 'flex' }}>
					{imageData.map((image) => (
						<>
							<ImageItem
								image={image}
								handleImageOnClick={handleImageOnClick}
							/>
						</>
					))}
				</div>
				<div style={{ display: 'flex' }}>
					<img
						src={`https://via.placeholder.com/300/${imageData[imageId].bgColor}/${imageData[imageId].color}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default selector;
