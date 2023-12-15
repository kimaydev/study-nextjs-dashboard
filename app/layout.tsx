import StyledComponentsRegistry from "./lib/registry";
import Sidebar from "./sidebar";
import Header from "./header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Sidebar />
          <div>
            <Header />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
