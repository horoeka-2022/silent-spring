import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Box from './Box'

function App() {
  // extend({ OrbitControls })

  // const Controls = () => {
  //   const { camera, gl } = useThree()
  //   const ref = useRef()
  //   useFrame(() => ref.current.update())
  //   return (
  //     <orbitControls
  //       ref={ref}
  //       target={[0, 0, 0]}
  //       enableDamping
  //       args={[camera, gl.domElement]}
  //     />
  //   )
  // }

  // function Sound({ url }) {
  //   const sound = useRef()
  //   const { camera } = useThree()
  //   const [listener] = useState(() => new THREE.AudioListener())
  //   const buffer = useLoader(THREE.AudioLoader, url)

  //   useEffect(() => {
  //     sound.current.setBuffer(buffer)
  //     sound.current.setRefDistance(1)
  //     sound.current.setLoop(true)
  //     sound.current.play()
  //     camera.add(listener)
  //     return () => camera.remove(listener)
  //   }, [])
  //   return <positionalAudio ref={sound} args={[listener]} />
  // }

  // function handleClick(event) {
  //   event.preventDefault()
  //   const audioCtx = new AudioContext()
  //   audioCtx.resume()
  // }

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-violet-300	">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.95} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Box position={[3.6, 2.4, 0]} />
          <Box position={[5.9, 6.0, 1.0]} />
          <Box position={[5.9, 6.0, 1.0]} />
          <Box position={[-4, -2, 0]} />
          <Box position={[8, 5, 3]} />
          <Box position={[3, -5, 3]} />
          <Box position={[-5, -3, 6]} />
          <Box position={[10, 6.0, 10]} />
          <Box position={[7, 7, 7]} />
          <Box position={[1, 3, 5]} />
          <Box position={[2, -5, 6]} />
          <Box position={[0, 6.0, -7]} />
          <Box position={[5, 10, -5]} />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}

export default App
