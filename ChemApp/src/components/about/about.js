import React from "react"
import "./style.css"

const about = () => {
  return (
    <main id="about">
      <h1>About</h1>
      <p>
        The purpose of this app is to provide math support while doing
        Chemistry. Chemistry is a subject that is challenging to understand and
        is further complicated by the necessity of precise math computation.
        This is where this app comes in. The function of the app is to allow
        persons to plug in compounds and elements, simplifying the math to
        plugging in possible coefficients and leave the math calculations to the app so you can understand the concepts and relations within compounds.
      </p>
      <h1>How to use</h1>
      <p>
        To use the app, you enter a compound or element in the input box
        provided and add it to either the Reactant or Product side of the
        equation. Continue to do this until you have finish placing all of the
        compounds on each side of the equation. The app will check to make sure
        that the entry is valid before accepting it and give you a reason if an
        entry is rejected.
      </p>
      <h1>Limitations</h1>
      <ul>
        <li>This app only accepts letters, numbers, and parentheses*</li>
        <li>
          You can only enter a number after an element and are limited to 999.
        </li>
        <li>
          Currently the balancing portion of this app is not working. This will
          be fix as soon as possible. If you change the numbers the site will
          crash.
        </li>
        <li>
          *parentheses is currently not working. If you want to write a
          polyatomic ion, you will have to write it out for ion within the
          parentheses. Example: Ca(NO3)2 = CaNO3NO3{" "}
        </li>
      </ul>
    </main>
  )
}

export default about
