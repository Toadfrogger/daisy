import {Header} from "./common/Header"
import {Footer} from "./common/Footer"
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>

            <body className="min-h-full flex flex-col">
              <Header/>
              {children}
              <Footer/>
              </body>
              

    </html>



  );
}
