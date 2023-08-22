import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Select({
  selected,
  list,
  onChange,
}: {
  selected: string
  list: { label: string; value: string; placeholder?: boolean }[]
  onChange?: (value: string) => void
}) {
  const selectedElement = list.find((elm) => elm.value === selected) ?? list[0]

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative w-36 sm:w-48">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:pr-10 sm:text-sm sm:leading-6">
              <span className="block truncate">{selectedElement?.label}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-2 sm:flex">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {list.map((element) => (
                  <Listbox.Option
                    key={element.value}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        element.placeholder ? 'opacity-50 cursor-not-allowed' : '',
                        'relative cursor-default select-none py-2 px-2 sm:pl-8 sm:pr-4'
                      )
                    }
                    value={element.value}
                    disabled={element.placeholder}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {element.label}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 items-center pl-1.5 hidden sm:flex'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
