// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import Fetch from '../fetch'
import  fetchPost  from './fetchPost';


  test('search query from component search appears as expected', async () => {
     // arrange
     render(<Home></Home>)
    const value = 'pizza';
    const searchTextBox = screen.getByPlaceholderText('search for recipes...');
    const searchButton = screen.getByText('search');
    fireEvent.change(searchTextBox, {target: {value: value}});


    // act
      const res = await fetchPost(process.env.REACT_APP_HEROKU_URL,value);
    // assert
      expect(res.status).toEqual(200)
    })