/* eslint-disable no-unused-vars */
import React from 'react';
import pic from '../../assets/avishek.png'
import react from '../../assets/react2.jpg'
import nodejs from '../../assets/nodejs.png'
import mongodb from '../../assets/mongo.png'
import expressjs from '../../assets/express.js.png'
import js from '../../assets/javascript_logo.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'



const Home = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-2'>
                    <p className='mt-40 mx-32 w-full italic font-extrabold text-6xl tracking-wide'>I <span className='text-orange-600'>am </span>a Computer Science <span className='text-orange-600'>Graduate</span>  <br /> & <br /> a <span className='text-orange-600'>Full-Stack</span> web developer</p>
                    <img className='w-2/3 mx-8' src={pic} alt="" />
                </div>
            </section>
            <section>
                <div>
                    <p className='text-center text-5xl font-extrabold mt-4'>About me</p>
                    <div className='mt-8 mb-8'>
                        <p className='text-xl text-slate-900 italic'>Iam a Graduate of Computer Science & engineering department.I have a skill of frontend & backend.I ensure that the sites which i develope these are look good by meet user expectations, they run smoothly and offer easy access points with no loading issues between pages or error messages.</p>
                    </div>
                </div>
            </section>
            <section>
                <p className='text-center text-5xl font-extrabold mt-20'>Skills</p>
                <div className='grid grid-cols-3 gap-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={react} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">React</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={nodejs} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">NodeJS</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={js} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">JAVASCRIPT</h2>
                        </div>
                        </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={mongodb} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">MongoDb</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={expressjs} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">ExpressJS</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={html} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Html</h2>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={css} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">CSS</h2>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;