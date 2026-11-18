import {Header} from "./common/Header"
import {Footer} from "./common/Footer"
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>

            <body className="min-h-full flex flex-col">
              <Header/>
              <main className="my-16 min-h-screen mx-auto max-w-4xl"> {children}</main>
              
              <Footer/>
              </body>
              

    </html>



  );
}
