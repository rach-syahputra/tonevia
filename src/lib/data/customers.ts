export type CustomerType = {
  imageSrc: string
  name: string
  job: string
  testimonial: string
}

export const customers: CustomerType[] = [
  {
    imageSrc: '/testimonials/testimonial-1.jpg',
    name: 'Adrian Hartono',
    job: 'Audio Engineer',
    testimonial:
      "The quality of Tonevia's instruments is outstanding! I’ve been using their guitar for months, and the sound is truly unmatched."
  },
  {
    imageSrc: '/testimonials/testimonial-2.jpg',
    name: 'Bella Kartika',
    job: 'Musician',
    testimonial:
      'Tonevia brings music to life. Their pianos are beautifully crafted, with rich tones that inspire every performance.'
  }
]
