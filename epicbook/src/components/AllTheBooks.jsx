
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function AllTheBooks(props) {

  const  [selected, setSelected] = useState(false);

  return (

    <Row>
      <Col md={12}>
        <Row> {props.books
              .filter(book => book.title.toLowerCase().includes(props.searchQuery.toLowerCase()))
              .map(book => <SingleBook 
                                key={book.asin} 
                                book={book}
                                selected = {selected}
                                setSelected = {setSelected}
                                 />)} 
        </Row>
      </Col>
    </Row>
  )
}
