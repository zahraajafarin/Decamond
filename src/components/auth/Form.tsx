"use client";
import { useActionState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Input from "./Input";
import Button from "../‌Button";
import { login } from "@/lib/actions/auth";

import { useUser } from "@/context/UserContext";

function Form() {
  const router = useRouter();
  const phoneRef = useRef<HTMLInputElement>(null)
  const { setUser } = useUser()
  const [state, formAction, pending] = useActionState(login, undefined);

  useEffect(() => {
    phoneRef.current?.focus()
  }, [])

  useEffect(() => {
    if (state?.user) {
      setUser(state.user);
      router.push('/dashboard')
    }
  }, [state, setUser]);

  return (
    <form action={formAction}>
      <Input
        type="tel"
        name="phone"
        placeholder="+98... or 09..."
        ref={phoneRef}
        error={state?.errors?.phone?.errors.join(", ")}
      />

      <Button type="submit" disabled={pending}>Login</Button>
    </form>
  );
}

export default Form;
