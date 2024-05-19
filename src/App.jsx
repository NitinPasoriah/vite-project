import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import Portal from './pages/Admin/Admin'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route path="/admin" element={<Portal />}>
        {/* <Route index element={<Portal />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>  
  )
}

export default App
