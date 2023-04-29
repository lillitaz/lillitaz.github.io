import catConstruction from '../images/catConstruction.jpg';

function Contact() {

    return (
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
    );
}

export default Contact;