import React from 'react'

function Footer() {
  return (

   <div>
  <footer className="bg-gray-800 dark:bg-gray-900 p-14">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-around py-8">
        <div className="flex-1 text-center mx-4 my-2 md:my-0">
          <h1 className="text-white text-3xl font-bold mb-3">LOCATION</h1>
          <p className="text-white">
            2215 John Daniel Drive
          </p><br/>
          <p className='text-white'> Clark, MO 65243</p>
        </div>

        <div className="flex-1 text-center mx-4 my-2 md:my-0">
          <h1 className="text-white text-3xl font-bold mb-3">AROUND THE WEB</h1>
          <span className='text-white text-xl'>
          <i className="fa-brands fa-facebook p-2 m-2 border rounded-full"></i>
          <i className="fa-brands fa-twitter p-2 m-2 border rounded-full"></i>
          <i className="fa-brands fa-linkedin-in p-2 m-2 border rounded-full"></i>
          <i className="fa-solid fa-globe p-2 m-2 border rounded-full"></i>
            </span>  
        </div>

        <div className="flex-1 text-center mx-4 my-2 md:my-0">
          <h1 className="text-white text-3xl font-bold mb-3">ABOUT FREELANCER</h1>
          <p className="text-white">
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>
    </div>
</footer>

<div className='bg-gray-900 text-white text-center p-6'>
<h3>Copyright © Your Website 2021</h3>
</div>
      



      
    </div>
  )
}
export default Footer;