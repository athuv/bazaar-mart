'use server'

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log('in')
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;


  console.log(searchParams)

  const cookieStore = cookies();


  if (token_hash && type) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            // eslint-disable-next-line drizzle/enforce-delete-with-where
            cookieStore.delete({ name, ...options });
          },
        },
      },
    );



    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {      
      return NextResponse.redirect(redirectTo)
    }
  }

  redirectTo.pathname = '/auth/auth-code-error'
  return NextResponse.redirect(redirectTo)

}
