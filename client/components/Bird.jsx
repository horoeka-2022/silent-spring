/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import { UnrealBloomPass } from 'three-stdlib'

import Sound from './Sound'
import Info from './Info'

function Bird({ position, data: birdData }) {
  const bird = useRef(null)
  const { camera } = useThree()
  const audioUrl = `./server/public/audio/${birdData.Sound_Id}.mp3`
  const minDist = 5
  const maxDist = 25

  // const [phase, setPhase] = useState(5)
  const [birdState, setBirdState] = useState({
    currentDist: 0,
    active: 0,
    clicked: false,
    visible: true,
    phase: 5,
  })

  // conditionally render animation and info
  useFrame(() => {
    const dist = camera.position.distanceTo(bird.current.position)
    if (birdState.clicked && (dist > maxDist || dist < minDist)) {
      setBirdState({
        ...birdState,
        active: 0,
        clicked: false,
        currentDist: dist,
      })
    }
  })

  // handle space bar to fast forward phase
  useEffect(() => {
    const handleRemove = (event) => {
      if (event.key === ' ') {
        setBirdState({ ...birdState, phase: birdState.phase - 1 })
        if (birdState.visible && birdData.Status === birdState.phase) {
          setBirdState({
            ...birdState,
            active: 0,
            clicked: false,
            visible: false,
          })
        }
      }
    }
    document.addEventListener('keydown', handleRemove)
    if (birdState.phase === 1) {
      return () => {
        document.removeEventListener('keydown', handleRemove)
      }
    }
  }, [birdState.phase])

  // show info if bird correct distance from camera
  function handleClick() {
    const dist = camera.position.distanceTo(bird.current.position)
    if (dist < maxDist && dist > minDist && birdState.visible) {
      setBirdState({
        ...birdState,
        active: Number(!birdState.active),
        clicked: !birdState.clicked,
        camDist: dist,
      })
    }
  }

  // animation setup
  const { spring } = useSpring({
    spring: birdState.active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })
  // const scale = spring.to([0, 1], [0, 1])
  const rotation = spring.to([0, 1], [0, Math.PI])

  // texture setup

  extend({ UnrealBloomPass })

  return (
    <a.mesh
      ref={bird}
      position={position}
      rotation-y={rotation}
      // scale-x={scale}
      // scale-z={scale}
      onClick={handleClick}
      visible={birdState.visible ? true : false}
    >
      <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
      <Sound url={audioUrl} visible={birdState.visible} vol={1} />
      {/* Not using && because when false, returns a non-null value */}
      {birdState.clicked && birdState.visible ? <Info data={birdData} /> : null}
    </a.mesh>
  )
}

export default Bird
