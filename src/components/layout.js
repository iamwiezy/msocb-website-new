import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { motion } from "framer-motion"

import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"
import Home_Page from "./home_page"
import Notifications from "./notifications"
import About_msocb from "./about_msocb"
import Services_section from "./services_section"
import VideoSection from "./video_section"
import FAQSection from "./faq_section"
import Team_section from "./team_section"
import NewsSection from "./news_section"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust for smoothness
      smooth: true,
      ease: 0.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // Cleanup on unmount
    }
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Navbar />
      <Home_Page />
      {/* <Notifications /> */}
      <About_msocb />
      <Services_section />
      <VideoSection />
      <FAQSection />
      <Team_section />
      {/* <NewsSection /> */}
      <Footer />
    </>
  )
}

export default Layout
