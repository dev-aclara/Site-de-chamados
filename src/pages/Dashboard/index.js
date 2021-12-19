import React from 'react';
import { useContext } from 'react';

import Header from '../../Components/Header';

import { AuthContext } from '../../contexts/auth';

export default function Dashboard(){
  const { signOut } = useContext(AuthContext);

  return(
    <div>
      <Header/>
      <h1>PAGINA DASHBOARD</h1>
    </div>
  )
}