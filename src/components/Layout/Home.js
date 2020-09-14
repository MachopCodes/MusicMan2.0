import React, { Fragment } from 'react'
import Search from '../Profile/Search'

const Home = props => {
  const unauthenticatedOptions = (
    <Fragment>
      <Search/>
    </Fragment>
  )
  const authenticatedOptions = (
    <Fragment>
      <Search/>
    </Fragment>
  )

  return (
    <section className="wallpaper">
      { props.user ? authenticatedOptions : unauthenticatedOptions }
    </section>
  )
}

export default Home
