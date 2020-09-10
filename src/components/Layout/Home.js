import React, { Fragment } from 'react'

const Home = props => {
  const unauthenticatedOptions = (
    <Fragment>
    </Fragment>
  )
  const authenticatedOptions = (
    <Fragment>
    </Fragment>
  )

  return (
    <section className="wallpaper">
      <div>
        { props.user ? authenticatedOptions : unauthenticatedOptions }
      </div>
    </section>
  )
}

export default Home
