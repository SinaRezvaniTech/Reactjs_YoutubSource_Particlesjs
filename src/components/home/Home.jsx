import { useCallback, useState } from 'react'

//react reveal
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

//particles
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

//config
import config from './particlesData'

//images
import myImg from '../../assets/images/ebb6b8e8-ec76-4f24-baad-a576e61a5ffa.jpg'

const Home = () => {
  const [imgHover, setImgHover] = useState(false)

  const imgHoverToggle = () => {
    setImgHover(!imgHover)
  }

  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <div className='w-screen h-screen'>
      <Particles
        id='tsparticles'
        options={config}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      {/* MAIN section */}
      <div className='relative w-full h-full container mx-auto px-5 py-5 md:px-10 items-center text-center grid grid-cols-12 grid-flow-row-dense break-words'>
        {/* TEXT section */}
        <div className='col-span-12 md:col-span-8 order-2 md:order-1 '>
          <div className='flex flex-col text-left gap-5 font-bold'>
            <Fade right cascade>
              <p className='text-xl md:text-2xl'>hi im</p>
            </Fade>
            <Zoom right cascade duration={2000}>
              <h1 className='text-5xl md:text-8xl'>Sina Rwzvani</h1>
            </Zoom>
            <Fade right cascade>
              <h2 className='text-3xl md:text-4xl'>A Front-end Developer</h2>
            </Fade>
          </div>
          <Fade bottom duration={2000}>
            <div className='mt-10 text-left font-bold backdrop-blur-md rounded-2xl shadow-md p-5 my-5'>
              <p className='text-2xl text-[#dc4646]'>Contact me {'{'}</p>
              <p className='text-xl text-[#702929] leading-10'>
                &nbsp; Emai : SinaRezvani.Tech@gmail.com <br />
                &nbsp; PhoneNumber : +44 5897 568744 <br />
                &nbsp; GitHub : https://github.com/SinaRezvaniTech <br />
              </p>
              <p className='text-2xl text-[#dc4646]'>{'}'}</p>
            </div>
          </Fade>
        </div>
        {/* IMG section */}
        <div className='col-span-12 md:col-span-4 p-5 order-1 md:order-2 '>
          <Fade bottom duration={1500}>
            <div className='relative overflow-hidden rounded-3xl w-full '>
              <img
                className={`${
                  imgHover && 'scale-125 grayscale-[0.4]'
                } w-full ease-in-out duration-500 `}
                src={myImg}
                alt='img'
              />
              <a
                onMouseEnter={imgHoverToggle}
                onMouseLeave={imgHoverToggle}
                className='absolute top-0 right-0 w-full h-full'
                href='https://github.com/SinaRezvaniTech'
                target={'_blank'}
              ></a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home
