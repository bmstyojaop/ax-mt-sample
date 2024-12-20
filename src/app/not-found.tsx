import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "./NotFoundTitle.module.css";
import Link from "next/link";

export default function NotFoundTitle() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>ページが見つかりませんでした。</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        お探しのページは削除されたか、一時的に利用できない状態にある可能性があります。
      </Text>
      <Group justify="center">
        <Link href="/">
          <Button variant="subtle" size="md">
            ホームへ戻る
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
