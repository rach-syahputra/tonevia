export type ProductType = {
  imageSrc: string
  name: string
  description: string
}

export const products: ProductType[] = [
  {
    imageSrc: '/products/guitar.webp',
    name: 'Guitar',
    description:
      'Experience the harmony of craftsmanship and sound. Our guitars deliver rich tones, perfect for every performance—whether on stage or in the studio.'
  },
  {
    imageSrc: '/products/piano.webp',
    name: 'Piano',
    description:
      'Timeless design meets impeccable sound quality. Discover our range of pianos, where every key unlocks a world of emotion and expression.'
  },
  {
    imageSrc: '/products/drum.webp',
    name: 'Drum',
    description:
      'Set the rhythm with precision-crafted drum kits. Designed for drummers who crave dynamic sound and unbeatable performance.'
  },
  {
    imageSrc: '/products/violin.webp',
    name: 'Violin',
    description:
      'Elevate your artistry with our finely crafted violins. Perfect for orchestras, ensembles, and solo performers seeking precision and elegance.'
  }
]
