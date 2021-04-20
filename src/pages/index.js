import React from 'react'
import { Switch, Redirect, Route, withRouter } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import List from './List'
import Detail from './Detail'
import MyList from './MyList'

const IndexPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })
  return isDesktopOrLaptop ? (
    <>
      <div>This app is designed for mobile only</div>
    </>
  ) : (
    <>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/my-list" component={MyList} />
        <Route path="/detail" component={Detail} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default withRouter(IndexPage)
