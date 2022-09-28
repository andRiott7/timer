/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History/History'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />

      </Route>

    </Routes>
  )
}
