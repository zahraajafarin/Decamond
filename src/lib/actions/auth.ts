"use server";
import { LoginFormSchema } from "../defenitions";
import { z } from 'zod';

export async function login(prevState: any, formData: FormData) {

  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    phone: formData.get("phone"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    const tree = z.treeifyError(validatedFields.error);
    return {
      errors: tree.properties,
    };
  }

  const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
  const data = await res.json();

  const user = data.results[0]

  return { user };
}
