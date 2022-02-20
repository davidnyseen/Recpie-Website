// __tests__/fetch.test.js
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import Fetch from '../fetch'
import  fetchRecipes  from '../utils/fetchRecipes';

// declare which API requests to mock
const server = setupServer(
    // capture "GET /greeting" requests
    rest.post('http://localhost:5000', (req, res, ctx) => {
      // respond using a mocked JSON body
      if(req.body.value === 'pizza'){
        return res(ctx.json({greeting: 'hello there'}))
      }
      else{
        return res(ctx.status(401), ctx.json({ success: false }))
      }
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())
  
  test('loads and displays greeting', async () => {
      const value = 'pizza';
      const res = await fetchRecipes(value);
      expect(res.statusCode).to.equal(200)
    })