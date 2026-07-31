import type { ImageMetadata } from 'astro';
import keithPhoto from '../assets/team/keith-nazal.png';

export interface TeamMember {
	name: string;
	position: string;
	summary: string;
	specialties?: string[];
	photo?: ImageMetadata;
}

export const leadershipTeam: TeamMember[] = [
	{
		name: 'Keith Dane S. Nazal',
		position: 'Co-Founder & Technical Chief Consultant – Assembly Solutions',
		summary:
			'Mechanical Engineer with over 13 years of semiconductor manufacturing experience across equipment engineering, new product introduction (NPI), process optimization, and technical sales support.',
		specialties: [
			'Semiconductor Assembly',
			'Wafer Dicing',
			'Package Saw',
			'Die Attach',
			'Lead Frame Processes',
			'New Product Introduction (NPI)',
			'Process Optimization',
			'Cost Reduction',
			'Technical Consulting',
			'Semiconductor Consumables',
			'Equipment Solutions',
		],
		photo: keithPhoto,
	},
	{
		name: 'Co-Founder',
		position: 'Co-Founder',
		summary: 'Profile to be updated.',
	},
];
