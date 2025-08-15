import React from 'react'
import Image from 'next/image'
import SignInFormClient from '@/features/auth/components/signin-form-client'

const SignInPage = () => {
  return (
    <div className='space-y-6 flex flex-col items-center justify-center'>
        <Image src={"/logo.png"} alt="ByteCanvas Logo" width={100} height={100} className='rounded-full'/>
        <SignInFormClient/>
    </div>
  )
}

export default SignInPage