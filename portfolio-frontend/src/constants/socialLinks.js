import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

import { IconsList} from "../elements/SocialIconsElements"
const data = [
  {
    id: 1,
    icon: <FaFacebookSquare></FaFacebookSquare>,
    url: "https://www.facebook.com/jesper.flodstrom",
  },
  {
    id: 2,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/jesper-flodstr%C3%B6m-015749193/",
  },
  // {
  //   id: 4,
  //   icon: <FaDribbbleSquare></FaDribbbleSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 5,
  //   icon: <FaBehanceSquare></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 3,
    icon: <FaTwitterSquare></FaTwitterSquare>,
    url: "https://twitter.com/JesperFlodstrm",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <IconsList>{links}</IconsList>
  )
}
