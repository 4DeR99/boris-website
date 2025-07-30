import * as yup from 'yup'

export const loginSchema = yup.object({
  emailOrUsername: yup.string().required('Email or username is required'),
  password: yup.string().required('Password is required'),
})

export type LoginSchema = yup.InferType<typeof loginSchema>
