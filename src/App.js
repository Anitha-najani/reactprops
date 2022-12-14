//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
//import DemoExample from './DemoExample'
//import JSX from './JSX'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from'./components/Navbar'
import NotFound from './components/NotFound'


function App(){
  return(
    <section>
    <BrowserRouter>
    <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
              </Routes>
          </BrowserRouter>
      {/*<StateExample/>
  <JSX/>
     <Events/>
      <FuncProps carname="Rolls Royce" year="1998"/>
      <DemoExample name="Anitha" rollno="203603"/>
        <PropsExample name="Anitha" age="20"/>
        <PropsExample name="Raji" age="26"/>
        <p>This is App</p>
        <h1>Heading Tag</h1>
        <img src="https://images.firstpost.com/wp-content/uploads/2022/02/tom-and-jerry.jpeg?impolicy=website&width=700&height=600" alt="tom and jerry"/>
        <ClassComponent/>*/}
    </section>
    )
}
export default App