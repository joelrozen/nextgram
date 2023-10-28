"use server";

import { redirect } from "next/navigation";

export async function redirectAction() {
  console.log("action triggered");
  await new Promise((res) => setTimeout(res, 1000));
  redirect("/");
}
