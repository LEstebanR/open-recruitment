import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { TextField } from '../UI/Fields'
import Link from 'next/link'
import BackgroundIllustration from '../layout/BackgroundIlustration'
import { signIn } from 'next-auth/react'
import { InferGetServerSidePropsType } from 'next'
import { getServerSideProps } from '@/pages/login'
import { useRouter } from 'next/router'
import Alert from '@/utils/Alert'

const LoginForm = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const callbackUrl = (router.query?.callbackUrl as string) ?? '/dashboard'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      await Alert({ type: 'error', message: result.error })
    } else {
      await router.push(callbackUrl)
    }
  }

  return (
    <div className='w-screen flex flex-col items-center'>
      <BackgroundIllustration
        className='hidden absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)] sm:-top-9 sm:h-auto sm:block' />
      <h1 className='text-2xl font-semibold text-gray-900 text-center'>
        Sign in to your account
      </h1>
      <p className='text-gray-600 mt-2 '>
        Don&apos;t have an account?{' '}
        <Link href='/signup' className='text-cyan-600 hover:underline'>
          Sign up here
        </Link>
      </p>

      <form className='bg-white px-4 py-8 rounded-3xl my-4 w-11/12 sm:w-64' onSubmit={(e) => handleSubmit(e)}>
        <div className='space-y-6 mb-4 w-full'>
          <TextField
            label='Email address'
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            label='Password'
            id='password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <Link href='/forgot-password' className='text-cyan-600 hover:underline'>
          Forgot your password?
        </Link>

        <Button type='submit' color='primary' size='full'>
          Sign in to account
        </Button>

        {Object.values(providers).filter((provider) => provider.id !== 'credentials').length >= 1 &&
          <span className='flex items-center justify-center space-x-2 text-sm mt-1'>
            <span className='h-px bg-gray-400 w-14'></span>
            <span className='font-normal text-gray-500'>or login with</span>
            <span className='h-px bg-gray-400 w-14'></span>
          </span>
        }

        {Object.values(providers).filter((provider) => provider.id !== 'credentials').map((provider) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)} color='white' size='full' className='mt-1'>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}

      </form>
    </div>
  )
}

export default LoginForm
