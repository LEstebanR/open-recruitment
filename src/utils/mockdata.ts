import { UserIcon, BriefcaseIcon, UserGroupIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export const user = {
  isAuthenticated: true,
  name: 'John Doe',
  tel: '+1 234 567 890',
  email: 'email@email.com',
  role: 'Admin',
  signature: `---
  John Doe`,
  companies: [
    {
      id: 1,
      name: 'Company 1',
      role: 'Admin',
      members: 3,
      signed: true,
    },
    {
      id: 2,
      name: 'Company 2',
      role: 'Recruiter',
      members: 1,
      signed: false,
    },
  ],
  calendars: [
    {
      id: 1,
      name: 'Google',
      logo: 'https://www.gstatic.com/images/branding/product/1x/calendar_48dp.png',
      email: 'test@gmail.com',
    },
  ],
  plan: 'Free trial',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
}

export const languages = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
]

export const days = [
  {
    label: 'Monday',
    value: 'monday',
  },
  {
    label: 'Tuesday',
    value: 'tuesday',
  },
  {
    label: 'Wednesday',
    value: 'wednesday',
  },
  {
    label: 'Thursday',
    value: 'thursday',
  },
  {
    label: 'Friday',
    value: 'friday',
  },
]

export const filterGraphOptions = [
  { label: 'Last 7 days', value: 'last7days' },
  { label: 'Last 30 days', value: 'last30days' },
  { label: 'This week', value: 'thisWeek' },
  { label: 'This month', value: 'thisMonth' },
]

export const events = [
  {
    id: 1,
    type: 'candidate',
    description: 'Jhon Doe',
    href: '#',
    icon: UserIcon,
  },
  {
    id: 2,
    type: 'job',
    description: 'Frontend Developer',
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    id: 1,
    type: 'candidate',
    description: 'Jhon Doe',
    href: '#',
    icon: UserIcon,
  },
  {
    id: 2,
    type: 'job',
    description: 'Frontend Developer',
    href: '#',
    icon: BriefcaseIcon,
  },
  {
    id: 1,
    type: 'candidate',
    description: 'Jhon Doe',
    href: '#',
    icon: UserIcon,
  },
  {
    id: 2,
    type: 'job',
    description: 'Frontend Developer',
    href: '#',
    icon: BriefcaseIcon,
  },
]

export const titles = [
  {
    icon: UserIcon,
    title: 'Candidates',
    number: 14,
  },
  {
    icon: BriefcaseIcon,
    title: 'Job openings',
    number: 2,
  },
  {
    icon: UserGroupIcon,
    title: 'Talent Pools',
    number: 2,
  },
]

export const appliesData = [
  {
    id: 1,
    type: 'Applied via carrers site',
    number: 2,
  },
  {
    id: 2,
    type: 'Applied via email',
    number: 1,
  },
  {
    id: 3,
    type: 'Added manually',
    number: 4,
  },
  {
    id: 4,
    type: 'Sourced',
    number: 0,
  },
]

export const tagData = [
  {
    id: 1,
    type: 'Sample',
    number: 14,
  },
  {
    id: 2,
    type: 'Senior',
    number: 2,
  },
  {
    id: 3,
    type: 'Junior',
    number: 2,
  },
  {
    id: 4,
    type: 'Mid-level',
    number: 2,
  },
]

export const sourceData = [
  {
    id: 1,
    type: 'Indeed',
    number: 14,
  },
  {
    id: 2,
    type: 'LinkedIn',
    number: 2,
  },
  {
    id: 5,
    type: 'Carrer site',
    number: 2,
  },
  {
    id: 6,
    type: 'Resume sent',
    number: 2,
  },
]

export const dataChart = [
  ['Day', 'Applicants'],
  [new Date(2023, 7, 1), 2],
  [new Date(2023, 7, 2), 3],
  [new Date(2023, 7, 3), 0],
  [new Date(2023, 7, 4), 5],
  [new Date(2023, 7, 5), 0],
  [new Date(2023, 7, 6), 7],
  [new Date(2023, 7, 7), 6],
  [new Date(2023, 7, 8), 4],
  [new Date(2023, 7, 9), 3],
  [new Date(2023, 7, 10), 2],
  [new Date(2023, 7, 11), 2],
  [new Date(2023, 7, 12), 2],
  [new Date(2023, 7, 13), 1],
  [new Date(2023, 7, 14), 0],
  [new Date(2023, 7, 15), 0],
  [new Date(2023, 7, 16), 1],
  [new Date(2023, 7, 17), 2],
  [new Date(2023, 7, 18), 5],
  [new Date(2023, 7, 19), 3],
  [new Date(2023, 7, 20), 1],
  [new Date(2023, 7, 21), 2],
  [new Date(2023, 7, 22), 3],
  [new Date(2023, 7, 23), 3],
  [new Date(2023, 7, 24), 1],
  [new Date(2023, 7, 25), 2],
  [new Date(2023, 7, 26), 0],
  [new Date(2023, 7, 27), 9],
  [new Date(2023, 7, 28), 1],
  [new Date(2023, 7, 29), 2],
  [new Date(2023, 7, 30), 8],
  [new Date(2023, 7, 31), 9],
]
