import { z } from 'zod'

export const LoginFormSchema = z.object({
  phone: z.string().regex(/^(\+98|0)?9\d{9}$/, 'Not a valid number!'),
});