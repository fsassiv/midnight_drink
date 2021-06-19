import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/'
import Home from './pages/home'
const CategoryPage = lazy(() => import('./pages/category/index.jsx'))
const DrinkPage = lazy(() => import('./pages/drink/index.jsx'))

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Suspense fallback={'Loading'}>
          <Route path='/category/:slug' component={CategoryPage} />
          <Route path='/drink/:id?' component={DrinkPage} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default Routes
