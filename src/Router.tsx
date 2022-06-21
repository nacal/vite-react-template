import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from './pages'

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Pages.Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
