import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Rainbow from './hoc/Rainbow'

class App extends Component {
  state = {
    routes:[
      {path:'/',component:Home,exact:true},
      {path:'/about',component:About},
      {path:'/contact',component:Contact},
    ]
  }
  wrappRouter(components){
    return (
      <BrowserRouter>
        {components}
      </BrowserRouter>
    )
  }
  getRoutes(routes){
    return routes.map((route,index) => {
      return (
        <div className="routesWrapper" key={index}>
          <Route {...route}/>
        </div>
      )
    })
  }
  wrapApp(route){
    return (
      <div className="App">
        <Navbar xx="qq"/>
        {route}
      </div>
    )
  }
  pipe(...fns){
    return fns.reduce((fna,fnb) => (...args) => fna(fnb(...args)))
  }
  render() {
    const renderMarchine = this.pipe(this.wrappRouter,this.wrapApp,this.getRoutes)
    return renderMarchine(this.state.routes)
    // return (
    //   <BrowserRouter>
    //     <div className="App">
    //       <Navbar />
    //       <Route exact path='/' component={Home}/>
    //       <Route path='/about' component={About} />
    //       <Route path='/contact' component={Contact} />
    //     </div>
    //   </BrowserRouter>
    // );
  }
}

export default App;
