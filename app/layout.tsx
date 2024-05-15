import Theming from "@/Theme/Theming";
import "./globals.css";

import Headpage from "./Header/page";
import Footer from "./Footer/page";

app/layout.tsction RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Headpage />
          <main>{children}</main>
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
