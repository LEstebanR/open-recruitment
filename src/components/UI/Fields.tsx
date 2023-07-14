import React, { ReactNode } from 'react'
import clsx from 'clsx'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { PiBuildingsBold } from 'react-icons/pi'

const formClasses =
  'block w-full rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

interface LabelProps {
  id: string
  children: ReactNode
}

interface TextFieldProps {
  id: string
  label?: string
  type?: string
  className?: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
  name?: string
}

type option = {
  value: string
  label: string
}
interface SelectFieldProps {
  id: string
  label?: string
  className?: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
  name?: string
  options: option[]
}

interface PhoneFieldProps {
  id: string
  label?: string
  className?: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
  name?: string
}

interface Company {
  id: number
  name: string
}

function Label({ id, children }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className,
  ...props
}: TextFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  id,
  label,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')}>
        {props.options.map((option: option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function PhoneField({
  id,
  label,
  className,
  ...props
}: PhoneFieldProps) {
  const containerStyles = {
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
  }

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <div style={containerStyles}>
        <PhoneInput
          placeholder="write your phone..."
          country="us"
          {...props}
          inputStyle={{
            width: '100%',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            outline: 'none',
          }}
        />
      </div>
    </div>
  )
}

export function SelectCompany({ companies }: { companies: Company[] }) {
  return (
    <div className="flex items-center">
      <PiBuildingsBold className="h-6 w-6" />
      <select
        id="company"
        name="company"
        className="block text-base focus:outline-none focus:ring-cyan-500  rounded-md h-10 bg-transparent"
        defaultValue="0"
      >
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  )
}
