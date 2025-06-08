import React from 'react'
import {Routes , Route} from 'react-router'
import Home from '../pages/Home.jsx';
import Explore from '../pages/Explore.jsx';
import Community from '../pages/Community.jsx';
import  Favorites from '../pages/Favorites.jsx'
import Help  from '../pages/Help.jsx'
import AddRecipe from '../pages/AddRecipe.jsx'
import ExploreCard from '../pages/exploreCard.jsx';
const MainRoutes = () => {


  return (
    
    <div className='flex-1'>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/explore' element={<Explore/>}>
      <Route index element={<ExploreCard category="all" />} />  
    <Route path=':name' element={<ExploreCard/>}></Route>
    </Route>
    <Route path='/favorites' element={<Favorites/>}></Route>
    <Route path='/community' element={<Community/>}></Route>
    <Route path='/help' element={<Help/>}></Route>
    <Route path='/addrecipes' element={<AddRecipe/>}></Route>
</Routes>
    </div>
  )
}

export default MainRoutes