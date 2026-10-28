export interface MenuItem {
  name: string;
  href: string;
  items?: MenuItem[]; 
}

export const menuItems: MenuItem[] = [
  { name: 'ACCUEIL', href: '#accueil' },
  { name: 'QUI SOMMES NOUS ?', href: '#qui-sommes-nous' },
  { name: 'PROCHAINS CONCERTS', href: '#prochainsconcerts' },
  { 
    name: 'GROUPES', 
    href: '/groupes/', 
    items: [
      { 
        name: 'The Dillingers', 
        href: '/groupes/the-dillingers/',
        items: [
          { name: 'VIDEOS', href: '#videos' },
          { name: 'BIO', href: '#bio' },
          { name: 'AUDIO', href: '#audio' },
          { name: 'CONCERTS', href: '#concerts' },
        ],
      },
    ],
  },
  { name: 'CONTACT', href: '#contact' },
];

