import React from 'react';

const SignIn = () => {
    return (
        <div className='sign-in'>
            <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                </h3>
                <form>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="name"
                            className="inline-block mb-1 font-medium"
                        >
                            Name
                        </label>
                        <input
                            placeholder="John Doe"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="mb-1 sm:mb-2">
                        <label
                            htmlFor="email"
                            className="inline-block mb-1 font-medium"
                        >
                            E-mail
                        </label>
                        <input
                            placeholder="john.doe@example.org"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            </div>

        </div>
    );
};

export default SignIn;