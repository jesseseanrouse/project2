import React from "react"

const about = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        The purpose of this app to help people who have trouble doing the math
        while doing Chemistry. Its a subject that is hard enough to understand
        without having to get caught up on the math. This is where this app
        comes in. The goal is have you be able plug in some numbers and leave
        the math to the app so you can understand whats going on without making
        mistakes and causing more hurdles to jump over. While you still need to
        be able to do the math at some point; this is here to help you get to
        that point.
      </p>
      <h1>How to use</h1>
      <p>
        All you have to do is enter a compound or element in the space provided
        and add it to either the Reactant or Product side of the equation.
        Continue to do this until you have finish placing all of the compounds
        on each side of the equation. The app will check to make sure that the
        entry is valid before accepting it and give you a reason if it is
        rejected.
      </p>
      <h1>Limitations</h1>
      <ul>
        <li>This app only accepts letter, numbers, and parentheses*</li>
        <li>You can only enter a number after an element and are limited to 999. This is for practical reasons; you really aren't going to come across an compound that has more that 999 elements in it.</li>
        <li>Currently the balancing portion of this app is not working. This will be fix as soon as possible. If you change the numbers the site will crash.</li>
        <li>*parentheses is currently not working. If you want to write a polyatomic ion, you will have to write it out for ion within the parentheses. Example: Ca(NO3)2 = CaNO3NO3 </li>
      </ul>
    </>
  )
}

export default about
