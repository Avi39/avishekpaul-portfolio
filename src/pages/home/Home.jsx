/* eslint-disable react/no-unescaped-entities */
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
import Project_tweleve from '../../assets/project-12.png'
import Project_eleven from '../../assets/project-11.png'
import Project_ten from '../../assets/project-10.png'
import { Link } from 'react-router-dom';



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
                        <p className='text-xl text-slate-900 italic'>Iam a Graduate of Computer Science & engineering department.I have a skill of frontend & backend.I ensure that the sites which i develope these are look good by meet user expectations, they run smoothly and offer easy access points with no loading issues between pages or error messages. I also have some curriculumn activities like iam a volunteer of YOUTH VOICE.</p>
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
            <section>
                <p className='text-center text-5xl font-extrabold mt-20 mb-20'>Projects</p>
                <div className='grid grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Project_tweleve} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Summer Camp With <br />MARTIAL ART
                            </h2>
                            <div className="badge badge-secondary">Features:</div>
                            <p className='text-slate-600'>1.Students can buy courses whatever they want and choose the different course of different teachers.</p>
                            <p className='text-slate-600'>2.Teachers can add a course and admin can organize students and teachers.</p>
                            <p className='text-slate-600'>3.This website have a feature of user authentication, a private route, and a unique admin role.</p>
                            <div className="card-actions justify-end">
                                <Link to="https://assignment-tweleve-server.web.app/">
                                    <button className="btn btn-outline btn-info btn-sm">Live site</button>
                                </Link>
                                <Link to="https://github.com/Ananthadeb1/summer-camp-client-side">
                                    <button className="btn btn-outline btn-error btn-sm">Client Github</button>
                                </Link>
                                <Link to="https://github.com/Avi39/summer-camp-server">
                                    <button className="btn btn-outline btn-success btn-sm">Server</button>
                                </Link>
                            </div>
                            <button className="btn btn-active btn-neutral mt-2">Explore</button>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Project_eleven} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Toy MarketPlace
                            </h2>
                            <div className="badge badge-secondary">Features:</div>
                            <p className='text-slate-600'>1.Users can add products How many they want and it will added to the customer product list.</p>
                            <p className='text-slate-600'>2.Users can see all products by list and their details including their own products.</p>
                            <p className='text-slate-600'>3.This website has user authentication, a private route, and curd operations.</p>
                            <div className="card-actions justify-end">
                                <Link to="https://assignment-eleven-cf75d.web.app/">
                                    <button className="btn btn-outline btn-info btn-sm">Live site</button>
                                </Link>
                                <Link to="https://github.com/Avi39/toy-marketplace">
                                    <button className="btn btn-outline btn-error btn-sm">Client Github</button>
                                </Link>
                                <Link to="https://github.com/Ananthadeb1/toy-marketplace-server-side">
                                    <button className="btn btn-outline btn-success btn-sm">Server</button>
                                </Link>
                            </div>
                            <button className="btn btn-active btn-neutral mt-2">Explore</button>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={Project_ten} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Hot Recipe
                            </h2>
                            <div className="badge badge-secondary">Features:</div>
                            <p className='text-slate-600'>1.Users can see some chefs and recipes on each chef's details page.</p>
                            <p className='text-slate-600'>2.Users can select a recipe and also can see the different recipe of the same chef.</p>
                            <p className='text-slate-600'>3.This website has user authentication, a private route, and a dynamic route.</p>
                            <div className="card-actions justify-end">
                                <Link to="https://chafe-assignment-10.web.app/">
                                    <button className="btn btn-outline btn-info btn-sm">Live site</button>
                                </Link>
                                <Link to="https://github.com/Ananthadeb1/chef-recipe-hunter-client-side">
                                    <button className="btn btn-outline btn-error btn-sm">Client Github</button>
                                </Link>
                                <Link to="https://github.com/Ananthadeb1/chef-recipe-hunter-server-side">
                                    <button className="btn btn-outline btn-success btn-sm">Server</button>
                                </Link>
                            </div>
                            <button className="btn btn-active btn-neutral mt-2">Explore</button>
                        </div>
                    </div>
                </div>
                <button className="btn btn-active btn-primary w-2/3 ml-48 mt-4 mb-8">see more projects</button>
            </section>
            <section>
                <p className='text-center text-5xl font-extrabold mt-20 mb-8'>Contact Information</p>
               <div className='grid grid-cols-2 gap-8 ml-40'>
                <div className='ml-32'>
                <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className='ml-32'>
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                </div>
               </div>
               <div className='ml-72 mt-8'>
                <input type="text" placeholder="Address" className="input input-bordered w-full max-w-lg" />
                </div>
                <div className='ml-72 mt-8'>
                <textarea placeholder="Type your message here" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>
                <div className='ml-72 mt-8 mb-20'>
                <button className="btn btn-neutral w-7/12">submit</button>
                </div>

            </section>

        </div>
    );
};

export default Home;