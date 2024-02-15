import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="flex h-screen items-center justify-center">{children}</main>;
}
