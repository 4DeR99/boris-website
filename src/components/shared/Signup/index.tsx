import { Input } from '@/components/system/Input'
import React from 'react'
import { signupSchema, SignupSchema } from './validationSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/components/ui/button'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { useRouter } from 'next/navigation'

interface SignupProps {
  onLogin: () => void
}

export const Signup = ({ onLogin }: SignupProps) => {
  const router = useRouter()
  const form = useForm<SignupSchema>({
    resolver: yupResolver(signupSchema),
  })

  const {
    register,
    formState: { errors },
  } = form

  const switchToLogin = () => {
    router.push('/auth?authType=signin')
    onLogin()
  }

  return (
    <form className="flex w-full max-w-md flex-col gap-4 rounded-[25px] border px-8 py-10 font-satoshi shadow-sm">
      <h2 className="text-center text-3xl font-bold">Sign up</h2>
      <h3 className="text-base text-gray-500">
        Enter your credentials to continue
      </h3>
      <Input
        {...register('username')}
        placeholder="Enter your username"
        error={errors.username?.message}
      />
      <Input
        {...register('email')}
        placeholder="Enter your email"
        error={errors.email?.message}
      />
      <Input
        {...register('password')}
        placeholder="Enter your password"
        error={errors.password?.message}
      />
      <Input
        {...register('confirmPassword')}
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
      />
      <Button
        size="lg"
        type="submit"
        className="mt-3"
      >
        Sign up
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
        Already have an account?{' '}
        <button
          className="text-sm text-black"
          onClick={switchToLogin}
          type="button"
        >
          Log in
        </button>
      </span>
    </form>
  )
}
