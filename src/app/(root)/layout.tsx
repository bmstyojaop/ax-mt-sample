import { Header } from "@/ui/components/header/header";
import { Container, rem, Space } from "@mantine/core";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Space style={{ height: rem("56px") }} />
      <Container size="md" py="xl">
        {children}
      </Container>
    </>
  );
}
