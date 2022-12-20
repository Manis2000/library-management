import React from 'react'
import { Header } from './Header'
import Container from "react-bootstrap/esm/Container";
 const layout = ({children}) => {
  return (
    <div>
        <Header/>
        
      <Container className="mt-5" style={{ minHeight: "73vh" }}>
        {children}
      </Container>
      <footer className="text-center bg-dark text-light p-5 mt-5">
        &copy; all right reserved 2022 || Made with fun by ME
      </footer>

    </div>
  )
}
export default layout;
