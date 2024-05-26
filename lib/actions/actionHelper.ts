"use server";
import { createBackEndClient } from "@/lib/db/supabase";

export async function getBackEndClient() {
  return await createBackEndClient();
}
