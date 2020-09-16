import React, { Fragment } from 'react'
import Search from '../Profile/Search'

const Home = props => {
  const unauthenticatedOptions = (
    <Fragment>
      <Search {...props}/>
    </Fragment>
  )
  const authenticatedOptions = (
    <Fragment>
      <Search {...props}/>
    </Fragment>
  )

  return (
    <section className="wallpaper">
      { props.user ? authenticatedOptions : unauthenticatedOptions }
    </section>
  )
}

export default Home
