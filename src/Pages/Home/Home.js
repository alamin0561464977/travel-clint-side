import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/Rectangle 1.png';
import img1 from '../../images/Rectangle 26.png';
import img2 from '../../images/Rectangle 27.png';
import img3 from '../../images/Rectangle 28.png';
import img4 from '../../images/Sreemongol.png';
import img5 from '../../images/sundorbon.png';

const Home = () => {
    return (
        <div className='Color'>
            <div className="relative">
                <img
                    src={img}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative home bg-black  bg-opacity-75 bg-deep-purple-accent-700">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative px-4 py-8 mx-auto overflow-hidden sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:pt-0 lg:mb-24">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    The quick, brown fox <br className="hidden md:block" />
                                    jumps over a lazy dog
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                            </div>
                            <div className="w-full xl:px-4 xl:pb-12 ">
                                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                    <div className="grid gap-6 row-gap-5 mt-12 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                                        <a href="/" aria-label="View Item">
                                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                                <img
                                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                                    src={img1}
                                                    alt=""
                                                />
                                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                                    <p className="text-sm font-medium tracking-wide text-white">
                                                        Sed ut perspiciatis unde omnis iste natus error
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/" aria-label="View Item">
                                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                                <img
                                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                                    src={img2}
                                                    alt=""
                                                />
                                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                                    <p className="text-sm font-medium tracking-wide text-white">
                                                        Leverage agile frameworks to provide a robust synopsis
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/" aria-label="View Item">
                                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                                <img
                                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                                    src={img3}
                                                    alt=""
                                                />
                                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                                    <p className="text-sm font-medium tracking-wide text-white">
                                                        Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/" aria-label="View Item">
                                            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                                                <img
                                                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                                                    src={img4}
                                                    alt=""
                                                />
                                                <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                                    <p className="text-sm font-medium tracking-wide text-white">
                                                        Rough pomfret lemon shark plownose chimaera
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link
                                            to="/sign-in"
                                            aria-label=""
                                            className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-deep-purple-800"
                                        >
                                            Booking
                                            <svg
                                                className="inline-block w-3 ml-2"
                                                fill="currentColor"
                                                viewBox="0 0 12 12"
                                            >
                                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;