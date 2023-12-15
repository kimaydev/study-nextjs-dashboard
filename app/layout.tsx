import Sidebar from "./sidebar";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
