
import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
/* import axios from 'axios' */
import axios from '../modules/ApiAxios'
// Definisco il componente funzionale SingleComment
export default function SingleComment({comment,setAdd,add}) {
// Funzione per rimuovere un commento
  const removeComment = (comment) => {
    // Effettua una richiesta DELETE per rimuovere il commento specifico utilizzando il suo _id
      axios.delete('/comments/' + comment._id).then(response => {
    // Se la richiesta ha successo, aggiorna lo stato per forzare un aggiornamento del componente padre
        setAdd(!add);
      })
      .catch(error => console.error(error))
  }

  return (
    // Rende un ListGroup.Item per visualizzare il commento
    <ListGroup.Item>
      {comment.comment}
      {/* Aggiunge un pulsante per rimuovere il commento */}
      <Button variant="outline-danger" className='float-end' onClick={() => removeComment(comment)}>x</Button>  
    </ListGroup.Item>
  )
}
