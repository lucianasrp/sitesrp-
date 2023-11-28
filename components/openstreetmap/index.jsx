import { COMPANY } from '../../config/company';
import Nominatim from 'nominatim-geocoder';

export default async function OpenStreetMap({ lat, lon, zoom }) {
	let zLat = 0.000002647017675 * zoom * 20;
	let zLon = 0.000002499001956 * zoom * 20;

	//const Nominatim = require('nominatim-geocoder')
	const geocoder = new Nominatim()
	let data = [];

	await geocoder.search( { q: `${COMPANY.location.address}` } )
    .then((response) => {
        console.log(response)
				data = response[0];
    })
    .catch((error) => {
        console.log(error)
				return (
					<>
						{error}
					</>
				)
    });

	lat = data.lat;
	lon = data.lon;

	// lat: '-20.7859752',
	// lon: '-49.4410888',
	//                 -20.7859752    -20.7859752    -49.4410888    -49.4410888
	// boundingbox: [ '-20.7861971', '-20.7857373', '-49.4448026', '-49.4370985' ]
	// <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-49.445139169693%2C-20.788229531578825%2C-49.43810105323792%2C-20.783700749825606&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=18/-20.78597/-49.44162">Ver mapa ampliado</a></small>

	return (
		<>
			<iframe className='osmap_iframe w-full h-full' width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
				src={`https://www.openstreetmap.org/export/embed.html?bbox=${data.boundingbox[2]}%2C${data.boundingbox[0]}%2C${data.boundingbox[3]}%2C${data.boundingbox[1]}&layer=mapnik&marker=${lat}%2C${lon}&layer=transportmap`}></iframe>
		</>
	)
}