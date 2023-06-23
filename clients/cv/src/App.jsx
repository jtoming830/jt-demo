import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { hiddenRoutes } from './router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {hiddenRoutes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
