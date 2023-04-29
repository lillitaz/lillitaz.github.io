const Navbar = () => {
    return (
        <>
            <nav class="px-4 bg-black border-gray-200 text-white dark:bg-gray-600 dark:border-gray-800">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Lilli Weitzer</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="/about" class="block py-2 pl-3 pr-4 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;