import React from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Alert variant='danger' className='text-center'>
        <h1>Error 404! Page not found.</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go to Home</Link> {/* Aggiungi un link alla homepage */}
    </Alert>
  )
}