import React from 'react'
import { useContext } from 'react';
import { ContextProvider } from '../App';
import { useParams } from 'react-router-dom';

function New() {
    const {user} = useContext(ContextProvider);
    const {id} = useParams();
  return (
    <div>New, {user.name}, {id}</div>
  )
}

export default New