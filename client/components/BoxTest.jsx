/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react'
import { Text } from 'troika-three-text'
import { extend } from '@react-three/fiber'
import Sound from './Sound'
import Banner from './Banner'

function BoxTest(props) {
  extend({ Text })
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, setClicked] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  function handleClick(event) {
    event.preventDefault()
    setClicked(!clicked)
  }

  const audioUrl = `./server/public/audio/${props.data.ML_Catalog_Number}.mp3`

  return (
    <mesh
      position={props.position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
      <Sound url={audioUrl} vol={clicked ? 0.1 : 1}/>
          {clicked ?
          <Banner text={'whatever'} />}
    </mesh>
  )
}

export default BoxTest
