import { Button } from "@/app/_components/atoms/shadcn/button";
import Link from "next/link";
import { createClient } from "@/lib/db/supabase/server";

async function LoginSignup() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    !user && (
      <div className="flex flex-col items-start gap-2 px-2 py-4 md:hidden">
        <h4 className="header-4">Sign in for the best experience</h4>
        <Button className="w-full" variant="secondary" size="lg" asChild>
          <Link href="/auth">Sign in</Link>
        </Button>
        <Button className="h-fit p-0" variant="link" asChild>
          <Link href="/auth">Create an account</Link>
        </Button>
      </div>
    )
  );
}

export default LoginSignup;
