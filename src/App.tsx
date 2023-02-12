import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreate } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com/users/2')

function App() {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} create={UserCreate} />
    </Admin>
    );
}

export default App
