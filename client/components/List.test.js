import React from 'react'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

import List from './List'
import store from '../slices/index'
import fetchBirds from '../api'

jest.mock('../api')

test('List component should contain 2 Bird components', async () => {
  fetchBirds.mockImplementation(() =>
    Promise.resolve([
      {
        ML_Catalog_Number: 212043711,
        Common_Name: 'South Island Takahe',
        Scientific_Name: 'Porphyrio hochstetteri',
        Country: 'New Zealand',
        State: 'Auckland',
        Locality: 'Tiritiri Matangi--general',
        Media_notes: '',
      },
      {
        ML_Catalog_Number: 203926781,
        Common_Name: "Parkinson's Petrel",
        Scientific_Name: 'Procellaria parkinsoni',
        Country: 'New Zealand',
        State: 'Auckland',
        Locality: 'Hauraki Gulf--general',
        Media_notes:
          'Calls by a group of birds while feeding on chum. Recorded from a ship. Elevation: 0 m. Date added to IBC: June 22, 2016.',
      },
    ])
  )
  render(
    <Provider store={store}>
      <List />
    </Provider>
  )
  const birds = await screen.findAllByRole('Bird')
  expect(birds).toHaveLength(2)
})

test('List component should not render Canvas component if data contains no elements', async () => {
  fetchBirds.mockImplementation(() => Promise.resolve([]))
  render(
    <Provider store={store}>
      <List />
    </Provider>
  )
  const birds = await screen.findAllByRole('Bird')
  expect(birds).not.toBeInTheDocument()
})
