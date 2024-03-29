import React from 'react'
import Link from 'next/link'
import { Cog6ToothIcon } from '@heroicons/react/24/outline' // Importa el icono aquí

export type Tag = {
  id: number
  name: string
  number: number
}

type FilterTagProps = {
  tagData: Tag[]
  label: string
}

const FilterTag = ({ tagData, label }: FilterTagProps) => {
  const labelTag = label.toLowerCase() === 'source' ? 'source' : 'tag'
  return (
    <div className="flex flex-col gap-2">
      <span className="flex gap-1 font-bold">
        <p>{label}</p>
        <Link href={`/settings/tags?tab=${labelTag}`}>
          <Cog6ToothIcon className="h-6 w-6" />
        </Link>
      </span>
      {
        <div className="flex flex-wrap gap-2">
          {tagData.map((tag: Tag) => (
            <Link href={`/candidates?${labelTag}=${tag.name.toLowerCase()}`} key={tag.id}>
              <div
                className="flex items-center justify-center gap-2 divide-x-2 rounded-md border px-4 py-2"
                key={tag.id}
              >
                <p>{tag.name}</p>
                <p className="pl-2 font-bold">{tag.number}</p>
              </div>
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default FilterTag
