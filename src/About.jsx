import React from 'react';

export default function About() {
    return (
        <div className='bg-teal min-h-screen flex items-center justify-center'>
            <main className='p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 mx-4 md:mx-8 lg:mx-16 xl:mx-32'>
                <div className='text-white'>
                    <h2 className='text-white font-bold text-4xl text-center mb-6'>CONTACT SECTION</h2>

                    <div className="flex items-center justify-center mb-8">
                        <div className="h-0.5 w-20 bg-white mx-2"></div>
                        <span className="text-white">★</span>
                        <div className="h-0.5 w-20 bg-white mx-2"></div>
                    </div>

                    <div className='flex flex-col md:flex-row gap-6'>
                        <div className='flex-1'>
                            <p className='text-lg'>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                        <div className='flex-1'>
                            <p className='text-lg'>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
