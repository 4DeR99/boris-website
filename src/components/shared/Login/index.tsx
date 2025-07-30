import React from 'react'
import { loginSchema, LoginSchema } from './validationSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/system/Input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { useRouter } from 'next/navigation'

interface LoginProps {
  onSignup: () => void
}

export const Login = ({ onSignup }: LoginProps) => {
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
    },
  })

  const {
    register,
    formState: { errors },
  } = form

  const switchToSignup = () => {
    router.push('/auth?authType=signup')
    onSignup()
  }

  return (
    <form className="flex w-full max-w-md flex-col gap-4 rounded-[25px] border px-8 py-10 font-satoshi shadow-sm">
      <h2 className="text-center text-3xl font-bold">Log in</h2>
      <h3 className="text-base text-gray-500">
        Enter your credentials to continue
      </h3>
      <Input
        {...register('emailOrUsername')}
        placeholder="Email or username"
        error={errors.emailOrUsername?.message}
      />
      <Input
        {...register('password')}
        placeholder="Password"
        error={errors.password?.message}
      />
      <Link
        className="text-sm text-gray-500 hover:text-black"
        href="/forgot-password"
      >
        Forgot password?
      </Link>
      <Button
        size="lg"
        className="mt-3"
        type="submit"
      >
        Log in
      </Button>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-full bg-black/20" />
        <span className="text-sm text-black/50">or</span>
        <div className="h-px w-full bg-black/20" />
      </div>
      <Button
        size="lg"
        type="button"
        variant="outline"
        className="flex items-center justify-center gap-2"
      >
        <GoogleIcon className="mr-0.5" />
        Continue with Google
      </Button>
      <span className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{' '}
        <button
          className="text-sm text-black"
          onClick={switchToSignup}
          type="button"
        >
          Sign up
        </button>
      </span>
    </form>
  )
}
