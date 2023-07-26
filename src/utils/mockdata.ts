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
