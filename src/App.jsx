import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Info'
import SectionOne from './components/About'
import SectionTwo from './components/Interests'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  )
}

export default App
