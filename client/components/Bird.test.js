import React from 'react'
import { screen, render } from '@testing-library/react'

import '@testing-library/jest-dom'

import Bird from './Bird'

test('Bird component should render Sound component with correct audioUrl', () => {
  const bird = {
    ML_Catalog_Number: 212043711,
    Common_Name: 'South Island Takahe',
    Scientific_Name: 'Porphyrio hochstetteri',
    Country: 'New Zealand',
    State: 'Auckland',
    Locality: 'Tiritiri Matangi--general',
    Media_notes: '',
  }
  const audioUrl = `./server/public/audio/${bird.ML_Catalog_Number}.mp3`
  render(<Bird key={bird.id} position={[0, 0, 0]} data={bird} />)
  expect(screen.getByText(audioUrl)).toBeInTheDocument()
})
