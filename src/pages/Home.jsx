import catConstruction from '../images/catConstruction.jpg';

function Home() {

    return (
        <>
            <div className="py-16">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:5/12 lg:w-5/12">
                            <a href="https://github.com/lillitaz">
                                <img
                                    src={catConstruction}
                                    alt=""
                                    loading="lazy"
                                    width="600vp"
                                ></img>
                            </a>
                        </div>
                        <div className="md:7/12 lg:w-6/12">
                            <p className="mt-6 text-gray-600">
                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Hello!</h2>
                                Thank you for visiting my Website. The website is currently under construction. I appreciate your patience. In the meantime, you can follow me on <a href="https://github.com/lillitaz" >Github </a> for updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative flex items-top justify-left min-h-screen bg-white dark:bg-gray-900 sm:items-left sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-9 lg:px-10">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-5xl sm:text-6xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch...
                                </h1>
                                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div class="ml-6 text-md tracking-wide font-semibold w-40">
                                        <a href="https://calendly.com/elisabeth_weitzer/meeting-mit-elisabeth">Schedule a Meeting with Me</a>
                                    </div>
                                </div>
        
                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-6 text-md tracking-wide font-semibold w-40">
                                        <a href="mailto:lilli.weitzer@gmail.com">lilli.weitzer@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;