"use client";
import appRoutes from "@/config/appRoutes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(appRoutes.dashboard);
}
