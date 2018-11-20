import ImageGallery from 'react-image-gallery';
import * as React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import "./HouseGallery.css";

export class HouseGallery extends React.Component {

	render() {
		const images = [
			{ original: "./images/866766790.jpg" },
			{ original: "./images/866766800.jpg" },
			{ original: "./images/866766809.jpg" },
			{ original: "./images/866766815.jpg" },
			{ original: "./images/866766825.jpg" },
			{ original: "./images/866766831.jpg" },
			{ original: "./images/866766843.jpg" },
			{ original: "./images/866766852.jpg" },
			{ original: "./images/866766858.jpg" },
			{ original: "./images/866766872.jpg" },
			{ original: "./images/866766879.jpg" },
			{ original: "./images/866766888.jpg" },
			{ original: "./images/866766897.jpg" },
			{ original: "./images/866766905.jpg" },
			{ original: "./images/866766913.jpg" },
			{ original: "./images/866766922.jpg" },
			{ original: "./images/866766937.jpg" },
			{ original: "./images/866766943.jpg" },
			{ original: "./images/866766955.jpg" },
			{ original: "./images/866782244.jpg" }
		]

		return (
			<ImageGallery
				items={images}
				showThumbnails={false}
				originalClass="house-image" />
		);
	}

}