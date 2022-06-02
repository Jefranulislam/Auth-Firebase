import React, { useReducer } from 'react';
import useFirebase from '../../Hook/useFirebase';

const Home = () => {
    const { user } = useFirebase();

    return (
        <section className="py-16  bg-blueGray-50">
            <div className="w-full   lg:w-4/12 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className="relative">
                                    {user ? <img src={user.photoURL} className="shadow-xl rounded-full h-auto align-middle border-4 -mt-12" ></img> : ""}
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                {user ? user.displayName : "No One Logged in Now"}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                                Email: {user ? user.email : ""}
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Solution Manager - Creative Tim Officer
                            </div>
                            <div className="mb-2 pb-3 text-blueGray-600">
                                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                University of Computer Science
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;