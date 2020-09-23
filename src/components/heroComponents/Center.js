import React from "react"
import { Button } from "../"
import { navigate } from "gatsby"

const Center = ({ price, title, link }) => {
  function navigateTo() {
    navigate(link)
  }

  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">
        {title}
      </p>
      <p>
        <span>{price}</span>
      </p>
      <Button onClick={navigateTo} title="Top article" />
    </div>
  )
}

export default Center
