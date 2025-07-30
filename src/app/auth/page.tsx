'use client'

import { Container } from '@/components/system/Container'
import { Login } from '@/components/shared/Login'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Signup } from '@/components/shared/Signup'

type AuthType = 'signin' | 'signup'

export default function Auth() {
  const searchParams = useSearchParams()
  const [authType, setAuthType] = useState<AuthType>(() => {
    const authType = searchParams.get('authType')

    return (authType as AuthType) ?? 'signin'
  })

  return (
    <main className="flex grow flex-col">
      <Container className="flex flex-1 grow items-center justify-center py-3 sm:min-h-[550px] sm:py-10">
        {authType === 'signin' ? (
          <Login onSignup={() => setAuthType('signup')} />
        ) : (
          <Signup onLogin={() => setAuthType('signin')} />
        )}
      </Container>
    </main>
  )
}
