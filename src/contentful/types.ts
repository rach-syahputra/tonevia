/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface IContentfulAsset {
  sys: { id: string }
  fields: {
    file: {
      url: string
      details?: any
      fileName?: string
      contentType?: string
    }
  }
}

export interface TypeToneviaProductsFields {
  name: EntryFieldTypes.Symbol
  image: EntryFieldTypes.AssetLink
  description: EntryFieldTypes.Text
  purchased: EntryFieldTypes.Integer
}

export type TypeToneviaProductsSkeleton = EntrySkeletonType<
  TypeToneviaProductsFields,
  'toneviaProducts'
>
export type TypeToneviaProducts<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeToneviaProductsSkeleton, Modifiers, Locales>
