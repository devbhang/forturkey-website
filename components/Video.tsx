export default function Video() {
	return (
		<div className="relative w-full h-full">
			<video
				autoPlay
				loop
				muted
				className="absolute top-0 z-0 w-auto max-w-full"
			>
				<source src="trailer.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
