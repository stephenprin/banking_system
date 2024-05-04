
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      SIDEBAR
      <main>{children}</main>
    </html>
  );
}
