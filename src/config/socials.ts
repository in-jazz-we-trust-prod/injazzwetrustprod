// Les réseaux globaux par défaut de votre production/structure
export const defaultSocialLinks = {
  // facebook: '',
  instagram: 'https://instagram.com/in_jazz_we_trust_prod',
  bandcamp: 'https://injazzwetrustprod.bandcamp.com',
  youtube: 'https://youtube.com/@InJazzWeTrustProd',
  // spotify: ''
};

// Configuration fixe de la correspondance Nom et Icône Astro-Icon
export const socialConfig: Record<string, { name: string; icon: string }> = {
  facebook: { name: 'Facebook', icon: 'fa7-brands:facebook' },
  instagram: { name: 'Instagram', icon: 'fa7-brands:instagram' },
  youtube: { name: 'Youtube', icon: 'fa7-brands:youtube' },
  bandcamp: { name: 'Bandcamp', icon: 'fa7-brands:bandcamp' },
  spotify: { name: 'Spotify', icon: 'fa7-brands:spotify' }
};

