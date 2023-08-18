import React from 'react'
import { Container } from '../UI/Container'
import { NavLinks } from '../UI/NavLinks'
import { Logo } from '../UI/Logo'
import JoinNewsletter from '../JoinNewsletter'
import { NextRouter, useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const FooterLanding = () => {
  const { data: session } = useSession()
  const router: NextRouter = useRouter()
  const currentPath = router.pathname
  const navOptions: [string, string][] = [
    ['/#features', 'Features'],
    ['/#reviews', 'Reviews'],
    ['/#pricing', 'Pricing'],
    ['/#faqs', 'FAQs'],
  ]

  return (
    <>
      {!session &&
        <footer className='border-t border-gray-200 w-full'>
          <Container>
            <div
              className='flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16'>
              <div className='flex flex-col gap-8 w-full justify-between items-center lg:flex-row'>
                <div className='flex items-center text-gray-900 w-full justify-between lg:w-fit'>
                  <Logo />
                  <div className='ml-4'>
                    <p className='text-base font-semibold'>Open Recruitment</p>
                    <p className='mt-1 text-sm'>
                      Hire the best people for your team
                    </p>
                  </div>
                </div>
                <nav className='hidden md:block'>
                  <NavLinks links={navOptions} />
                </nav>
              </div>
            </div>
            <div
              className='flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6 w-full'>
              <JoinNewsletter />
              <p className='mt-6 text-sm text-gray-500 md:mt-0'>
                &copy; Copyright {new Date().getFullYear()}. All rights reserved.
              </p>
            </div>
          </Container>
        </footer>
      }
    </>
  )
}

export default FooterLanding
