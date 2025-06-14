interface Award {
  id: string
  title: string
  year: string
  placement: string
  badgeColor: string
  imageUrl: string
}

export const AWARDS: Award[] = [
    {
        id: 'hackathon1',
        title: 'Vale | 42Rio Hackathon',
        year: '2024',
        placement: '1st Place',
        badgeColor: 'gold',
        imageUrl: '/awards/vale.jpeg',
    },
    {
        id: 'hackathon2',
        title: 'Modular Carnival Hackathon',
        year: '2025',
        placement: '2nd Place',
        badgeColor: 'silver',
        imageUrl: '/awards/paga.jpeg'
    }
]
