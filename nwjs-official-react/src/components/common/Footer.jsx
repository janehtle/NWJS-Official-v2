import { IoLogoTwitter, IoLogoYoutube, IoLogoInstagram, IoLogoTiktok, IoLogoFacebook } from "react-icons/io5"
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <ul className="socials">
        <li>
          <a
            href="https://twitter.com/NewJeans_ADOR"
            target="_blank"                           
            rel="noopener noreferrer" /* prevents window.opener access */
            aria-label="Leading to external site Twitter"  
          >
            <IoLogoTwitter />
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/c/NewJeans_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leading to external site YouTube"
          >
            <IoLogoYoutube />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/newjeans_official/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leading to external site Instagram"
          >
            <IoLogoInstagram />
          </a>
        </li>

        <li>
          <a
            href="https://www.tiktok.com/@newjeans_official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leading to external site TikTok"
          >
            <IoLogoTiktok />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/official.newjeans"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leading to external site Facebook"
          >
            <IoLogoFacebook />
          </a>
        </li>
      </ul>

      <p>Fan-made for educational and entertainment purposes only.</p>
      <p>
        All images, videos, and content related to NewJeans are copyright of their respective owners (ADOR / HYBE Labels).
      </p>
    </footer>
  )
}

export default Footer
