import React from 'react'
import Navs from './Navs'
 import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
      <Title title="Box-Office" subtile="Are you looking for an actor or movie" /> 
       <Navs/>
      {children}
    </div>
  )
}

export default MainPageLayout
