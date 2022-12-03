/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { fetchBirds } from '../api'

import BoxTest from './BoxTest'
import Controls from './Controls'

function RoomOne() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchBirds()
      .then((birds) => {
        setData(() => birds)
      })
      .catch((err) => err.message)
  }, [])

  function getRandomInt(max) {
    return Math.floor((Math.random() - 0.5) * max + 1)
  }

  function getRandomCoords() {
    const x = getRandomInt(40)
    const y = getRandomInt(15)
    const z = getRandomInt(10)
    return [x, y, z]
  }

  const firstThree = data.slice(0, 3)

  return (
    <>
      {data.length > 0 ? (
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 15] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {firstThree.map((data) => {
              return (
                <BoxTest
                  key={data.id}
                  position={getRandomCoords()}
                  data={data}
                />
              )
            })}
            <Controls />
          </Canvas>
        </Suspense>
      ) : (
        <p>test</p>
      )}
    </>
  )
}
export default RoomOne
