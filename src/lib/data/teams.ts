export type TeamType = {
  name: string
  image: string
  job: string
  description: string
}

export const teams: TeamType[] = [
  {
    name: 'Andi Pratama',
    image: '/teams/team-1.jpg',
    job: 'Chief Executive Officer',
    description:
      'A visionary leader and lifelong music enthusiast, Andi founded Tonevia to inspire musicians worldwide with instruments that blend art and precision.'
  },
  {
    name: 'Kevin Santoso',
    image: '/teams/team-2.jpg',
    job: 'Head of Product Design',
    description:
      'With a passion for design and craftsmanship, Kevin ensures every Tonevia instrument is both visually stunning and functionally perfect.'
  },
  {
    name: 'Rizky Putra',
    image: '/teams/team-3.jpg',
    job: 'Head of Sound Engineering',
    description:
      'A skilled sound engineer with years of experience, Rizky fine-tunes every instrument to deliver unparalleled sound quality.'
  },
  {
    name: 'Clara Anggraini',
    image: '/teams/team-4.jpg',
    job: 'Head of Marketing & Sales',
    description:
      "Clara brings Tonevia's story to the world, connecting musicians with instruments that ignite their creativity and passion."
  }
]
