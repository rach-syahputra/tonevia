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

export const customersForProductsPage: CustomerType[] = [
  {
    imageSrc: '/testimonials/testimonial-1.jpg',
    name: 'Adrian Hartono',
    job: 'Professional Guitarist',
    testimonial:
      "Tonevia's guitar has completely transformed my performances. The sound is rich and resonant, and the craftsmanship is top-notch. I can truly feel the differenc"
  },
  {
    imageSrc: '/testimonials/testimonial-2.jpg',
    name: 'Maya Setiawan',
    job: 'Classical Pianist',
    testimonial:
      "The Tonevia piano delivers exceptional tone and touch. Every key feels responsive, and the sound fills the room beautifully. It's perfect for my practice and performances."
  },
  {
    imageSrc: '/testimonials/testimonial-3.jpg',
    name: 'Rizky Putra',
    job: 'Session Drummer',
    testimonial:
      "I’ve played many drum kits over the years, but Tonevia's drums stand out. The sound is powerful, clear, and dynamic, making them my go-to for gigs and studio work."
  },
  {
    imageSrc: '/testimonials/testimonial-4.jpg',
    name: 'Clara Anggraini',
    job: 'Orchestra Violinist',
    testimonial:
      'Tonevia violins are a work of art. The tone is warm and vibrant, and it’s easy to play, even during long practice sessions. I couldn’t ask for a better instrument.'
  }
]
