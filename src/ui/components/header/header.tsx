"use client";
import { Burger, Container, Group, rem } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { link: "/", label: "ホーム" },
  { link: "/search", label: "探す" },
  { link: "/worksheet", label: "プリント" },
  { link: "/create", label: "投稿" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();
  const pinned = useHeadroom({ fixedAt: 120 });

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link} data-active={pathname === link.link || undefined}>
      {link.label}
    </Link>
  ));

  return (
    <header
      className={classes.header}
      style={{
        transform: `translate3d(0, ${pinned ? 0 : rem(-110)}, 0)`,
      }}
    >
      <Container size="md" className={classes.inner}>
        ロゴ
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
