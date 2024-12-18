/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'
import { Button } from '@/components/ui/button'
import ProductItem from './ProductItem'
import ProductItemSkeleton from './ProductItemSkeleton'
import contentfulClient from '@/contentful/contentful-client'
import {
  IContentfulAsset,
  TypeToneviaProductsSkeleton
} from '@/contentful/types'
import { customersForProductsPage as customers } from '@/lib/data/customers'

export default function Products() {
  const [products, setProducts] = useState<any[] | null>(null)

  const getProducts = async () => {
    try {
      const res =
        await contentfulClient.getEntries<TypeToneviaProductsSkeleton>({
          content_type: 'toneviaProducts',
          order: ['sys.createdAt']
        })

      setProducts(
        res.items.map((item) => ({
          ...item.fields,
          image: `https:${(item.fields.image as IContentfulAsset)?.fields.file.url}`
        }))
      )
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container className='flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-900 p-4 text-white md:p-6 lg:p-8'>
      <div className='flex flex-col items-center justify-center md:gap-2'>
        <Heading level={1}>Our Products</Heading>
        <Paragraph color='gray'>Crafted for Every Musician</Paragraph>
      </div>
      <div className='grid items-start gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-10 xl:gap-x-8 xl:gap-y-12'>
        {products && products.length > 0 ? (
          products?.map((product, index) => (
            <ProductItem
              key={index}
              {...product}
              customer={{ ...customers[index] }}
            />
          ))
        ) : (
          <>
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
          </>
        )}
      </div>
      <Button
        className='w-full bg-gray-600 text-sm text-white md:w-fit md:text-base lg:text-lg'
        asChild
      >
        <Link href='/products' aria-label='Products page'>
          Visit our shop
        </Link>
      </Button>
    </Container>
  )
}
