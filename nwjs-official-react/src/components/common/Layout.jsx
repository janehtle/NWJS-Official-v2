//basic structure: Header, main content area (children) - tthis is where each page's content goes, Footer
import Header from "./Header"
import Footer from "./Footer"

function Layout({children}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

//revisit the children prop - how to get it to work - what am i missing??

export default Layout
