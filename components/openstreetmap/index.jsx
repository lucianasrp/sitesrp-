export default function OpenStreetMap({ lat, lon, zoom }) {
	let zLat = 0.000002647017675 * zoom * 20;
	let zLon = 0.000002499001956 * zoom * 20;

	return (
		<>
			<iframe className='osmap_iframe w-full h-full' width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
				src={`https://www.openstreetmap.org/export/embed.html?bbox=${lon - zLon}%2C${lat - zLat}%2C${lon + zLon}%2C${lat + zLat}&layer=mapnik&marker=${lat}%2C${lon}&layer=transportmap`}></iframe>
		</>
	)
}