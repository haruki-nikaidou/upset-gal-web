import { Search } from '@/app/(list)/Search'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { q } = await searchParams

  return (
    <div className='flex items-center w-full flex-col'>
      <Search defaultInput={q ?? ''} />
    </div>
  )
}
