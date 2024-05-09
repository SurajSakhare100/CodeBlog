import React from 'react'
import Footer from '/src/Component/Footer/Footer'
import Blog from '/src/Component/Blog/Blog'
import reactcourse from '../../assets/react.png';
import space from '../../assets/space.png';
import { useSpring, animated } from 'react-spring';
function Homepage() {
    const styles = useSpring({
        loop: { reverse: true },
        from: {
            transform: 'translateY(10px)',
        },
        to: {
            transform: 'translateY(25px)',
        },
        config: { duration: 500 },
    });
    return (
        <div className=''>
            <div className='w-full h-full bg-gradient-to-tr from-black to-slate-900 px-8 lg:px-32'>
                <div className='relative w-full h-screen'>
                    <animated.div className='w-120 h-120 absolute bottom-40 right-10' style={styles}>
                        <img src={space} alt="" width={320} className='' />
                    </animated.div>
                    <div className='absolute left-0 bottom-60 translate-y-12'>
                        <p className='w-100 text-9xl text-white font-bold'>Code</p>
                        <p className='text-9xl text-white font-bold'>Learn &</p>
                        <p className='text-9xl text-white font-bold'>Build...</p>
                    </div>
                </div>
                <aside aria-label="Related articles" className="mt-10 py-10">
                    <div className="mx-auto">
                        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
                        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                            <Blog imgurl={reactcourse} />
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Homepage
