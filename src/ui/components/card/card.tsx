"use client";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import { ActionIcon, Avatar, Badge, Card, Center, Group, Image, Text, useMantineTheme } from "@mantine/core";
import classes from "./card.module.css";
import Link from "next/link";

interface ArticleCard {
  subject: string;
  link: string;
  title: string;
  summary: string;
  author: string;
  avatar?: string;
  image: string;
}
export function ArticleCard(articleCard: ArticleCard) {
  const theme = useMantineTheme();
  return (
    <Card withBorder radius="md" shadow="sm" className={classes.card} h={380}>
      <Link href={articleCard.link}>
        <Card.Section>
          <Image src={articleCard.image} height={180} alt="記事のメイン画像" />
        </Card.Section>
        <Badge className={classes.rating}>{articleCard.subject}</Badge>

        {/* <Text fw={500} lineClamp={1} className={classes.title}>
          {articleCard.title}
        </Text> */}

        {/* lineClamp 最大行数を超えると...で省略表示 */}
        <Text fw={500} lineClamp={1} className={classes.title}>
          {articleCard.title}
        </Text>
        <Text fz="sm" c="dimmed" lineClamp={4} className={classes.summary}>
          {articleCard.summary}
        </Text>
      </Link>
      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar src={articleCard.avatar} size={24} radius="xl" mr="xs" />
          <Text fz="sm" inline>
            {articleCard.author}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
