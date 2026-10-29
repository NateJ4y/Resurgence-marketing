export type Service = {
  slug: string
  number: string
  title: string
  short: string
  description: string
  deliverables: string[]
  image: string
  alt: string
}

export const services: Service[] = [
  {
    slug: 'brand-activations',
    number: '01',
    title: 'Brand activations',
    short: 'Turn a brand message into something people can experience.',
    description: 'From the first interaction to the final takeaway, build experiences that invite people to stop, participate and remember.',
    deliverables: ['Activation concept and planning', 'Sampling and product engagement', 'On-site brand experience', 'Field coordination and wrap-up'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=82',
    alt: 'A lively event space with people gathered around a live experience',
  },
  {
    slug: 'campus-youth-marketing',
    number: '02',
    title: 'Campus & youth marketing',
    short: 'Meet emerging audiences where culture, community and conversation happen.',
    description: 'Plan audience-aware campaigns for youth and campus environments, with the right message, team and activity for the setting.',
    deliverables: ['Campus and community outreach', 'Audience engagement concepts', 'Sampling and promotional campaigns', 'Location and activity planning'],
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=82',
    alt: 'Students gathering outdoors on a university campus',
  },
  {
    slug: 'promotional-staffing',
    number: '03',
    title: 'Promotional staffing',
    short: 'The right people make the experience feel effortless.',
    description: 'Support your campaign with a briefed, audience-ready team and practical on-the-ground coordination.',
    deliverables: ['Promotional talent sourcing', 'Briefings and role alignment', 'On-site team coordination', 'Campaign activity check-ins'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=82',
    alt: 'A professional team collaborating around a table',
  },
  {
    slug: 'events-sponsorships',
    number: '04',
    title: 'Events & sponsorships',
    short: 'Make your presence count before, during and after the event.',
    description: 'Bring brand presence, audience interaction and activation logistics together in one considered event experience.',
    deliverables: ['Event presence and activation planning', 'Sponsorship engagement concepts', 'Experience and run-of-show coordination', 'On-site execution support'],
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=82',
    alt: 'A crowd at an outdoor live music event',
  },
  {
    slug: 'branding-production',
    number: '05',
    title: 'Branding & production',
    short: 'Give the campaign a physical presence people can recognise.',
    description: 'Bring the visual layer of an activation together with practical branded materials and production coordination.',
    deliverables: ['Campaign print and branded collateral', 'Promotional merchandise coordination', 'Activation display concepts', 'Production and delivery coordination'],
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=82',
    alt: 'A designed event installation in a contemporary exhibition space',
  },
]

export const campaignFormats = [
  {
    label: 'Street-level engagement',
    type: 'Public-facing',
    description: 'Approachable, high-energy interactions designed around a specific audience and location.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80',
    alt: 'People sharing a lively outdoor social experience',
  },
  {
    label: 'Campus connections',
    type: 'Youth & campus',
    description: 'Relevant brand moments built for campus life, conversation and participation.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    alt: 'A group of university students talking together',
  },
  {
    label: 'Live brand experiences',
    type: 'Events',
    description: 'A considered presence that gives people a reason to stop, engage and remember.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    alt: 'An illuminated event with people enjoying the experience',
  },
]
