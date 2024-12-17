export default function ProductItemSkeleton() {
  return (
    <div className='flex h-[480px] w-[300px] max-w-full flex-col gap-4 sm:w-[420px] md:w-[600px]'>
      <div className='flex h-full w-full flex-col justify-between gap-2'>
        <div className='h-full max-h-[350px] w-full max-w-[560px] animate-pulse rounded-lg bg-gray-600'></div>

        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
      </div>
      <div className='flex h-full w-full flex-col gap-2'>
        <div className='h-full max-h-14 w-1/2 flex-grow-[2] animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-1/4 animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
        <div className='h-full max-h-8 w-full animate-pulse rounded-lg bg-gray-600'></div>
      </div>
    </div>
  )
}
