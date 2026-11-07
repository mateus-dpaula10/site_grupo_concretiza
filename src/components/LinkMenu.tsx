"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Item do menu principal: a página atual ganha a pílula verde-menta, como no Wix.
export function LinkMenu({ href, children, className = "", onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const ativo = href === pathname;
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={ativo ? "page" : undefined}
      className={`block rounded-full ${ativo ? "bg-menta text-fundo" : "hover:text-menta"} ${className}`}
    >
      {children}
    </Link>
  );
}
