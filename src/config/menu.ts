import { getCollection } from 'astro:content';

export interface MenuItem {
	name: string;
  	href: string;
  	items?: MenuItem[]; 
}

// Les rubriques principales fixes de votre site
const staticMenuItems: MenuItem[] = [
	{ name: 'Accueil', href: '/#accueil' },
  	{ name: 'Artistes', href: '/artistes/', items: [] }, 
	{ name: 'Qui sommes-nous ?', href: '/#qui-sommes-nous' },
	{ name: 'Actualités', href: '/actualites/' },
  	{ name: 'Concerts', href: '/#prochains-concerts' },
	{ name: 'Contact', href: '/#contact' },
];

export async function getMenu(): Promise<MenuItem[]> {
	const artistEntries = await getCollection('artistes');

  	const dynamicBands = artistEntries.map((artist) => {
    		const sections = [];

	    	if (artist.data.videos) {
		    	if (artist.data.videos.teaser) {
				sections.push({ name: 'Teaser', href: '#teaser' });
		    	} else if (artist.data.videos.other && artist.data.videos.other.length > 0) {
			    	sections.push({ name: 'Vidéos', href: '#videos' });
		    	}	
	    	} 

	    	// La Bio est obligatoire, on l'inclut d'office
	    	sections.push({ name: 'Bio', href: '#bio' });

	    	if (artist.data.videos && artist.data.videos.teaser && artist.data.videos.other && artist.data.videos.other.length > 0) {
	      		sections.push({ name: 'Vidéos', href: '#videos' });
	    	}

	    	if (artist.data.music && artist.data.music.bandId && artist.data.music.albumId) {
	      		sections.push({ name: 'Audio', href: '#audio' });
	    	}

	    	if (artist.data.dates) {
	      		sections.push({ name: 'Concerts', href: '#prochains-concerts' });
	    	}

	    	if (artist.data.links && artist.data.links.pro && (artist.data.links.pro.epk || artist.data.links.pro.photos)) {
			sections.push({ name: 'Pro', href: '#pro' });
	    	}

		// La Section Contact est obligatoire
		sections.push({ name: 'Contact', href: '#contact' });

	    	return {
	      		name: artist.data.title,
	      		href: `/artistes/${artist.id}/`,
	      		items: sections // Contient uniquement les sections existantes !
	    	};
	});

	return staticMenuItems.map(item => {
		if (item.name === 'Artistes') {
	      		return { ...item, items: dynamicBands };
	    	}
	    	return item;
	});
}

