/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
// import { useFrame } from '@react-three/fiber'
import Sound from './Sound'

function BoxTest(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  const audioUrl = `./server/public/audio/${props.data.ML_Catalog_Number}.mp3`
  console.log(audioUrl)

  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
      <Sound url={audioUrl} />
    </mesh>
  )
}

export default BoxTest
