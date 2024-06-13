import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/picture/logo1.png'
import { GrFormNextLink } from 'react-icons/gr'
import { MdOutlinePlayCircle } from 'react-icons/md'
import pic5 from './assets/picture/pic5.png'
import pic1 from './assets/picture/pic1.png'
import pic2 from './assets/picture/pic2.png'
import pic3 from './assets/picture/pic3.png'
import pic4 from './assets/picture/pic4.png'
import pic6 from './assets/picture/pic6.png'
import primam1 from './assets/picture/primam1.png'
import primam2 from './assets/picture/primam2.png'
import primam3 from './assets/picture/primam3.png'
import primam4 from './assets/picture/primam4.png'
import whyprim1 from './assets/picture/whyprim1.png'
import whyprim2 from './assets/picture/whyprim2.png'
import whyprim3 from './assets/picture/whyprim3.png'
import whyprim4 from './assets/picture/whyprim4.png'
import whyprim5 from './assets/picture/whyprim5.png'
import whyprim6 from './assets/picture/whyprim6.png'
import userpic1 from './assets/picture/userpic1.png'
import userpic2 from './assets/picture/userpic2.png'
import userpic3 from './assets/picture/userpic3.png'
import ready2 from './assets/picture/ready2.png'






function App() {


  return (
    <>

      <div className='container mx-auto font-serif'>
        {/* navbar */}
        <nav className='w-[350px] md:w-full h-[150px] md:h-full p-5'>
          <div className='flex flex-col md:flex-row justify-between items-center h-16 gap-3'>
            <div >
              <img src={logo} alt="" />
            </div>
            <div>
              <div className='flex gap-3'>
                <p className='text-[#FF5555]'>Home</p>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Features</p>
              </div>
            </div>
            <div>
              <div >
                <button className='  bg-black text-white p-2'>Download</button>
              </div>
            </div>
          </div>
        </nav>

        {/*make the best financial decisions section  */}
        <section>
          <div className='flex flex-col md:flex-row '>
            <div className='p-5 md:mt-16 md:w-[45%] bg-no-repeat bg-top' style={{ backgroundImage: `url(${pic6})` }} >
              <h1 className=' md:text-[40px] text-[30px] font-bold '> Make the best Financial Decisions</h1>
              <p className='md:mt-3 md:mb-1'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
              <div>
                <div className='flex'>
                  <button className='bg-black text-white py-2 px-4 flex items-center'> Get Started <GrFormNextLink /></button>
                  <button className=' py-2 px-4 flex items-center gap-1'> <MdOutlinePlayCircle /> Get Started  </button>
                </div>
              </div>
              <div>
                <img src={pic5} alt="" />
              </div>
            </div>
            <div className='w-[200px] h-[230px] md:h-full md:w-[50%] '>
              <div className='flex relative'>
                <img className='absolute z-30 md:h-[500px]' src={pic1} alt="" />
                <img className='absolute z-20 md:ml-28 ml-5 md:mt-20 md:h-[500px] mt-5' src={pic2} alt="" />
                <img className='absolute z-10 md:ml-52 ml-9 md:mt-28 md:h-[500px] mt-9 ' src={pic3} alt="" />
                <img className='absolute md:ml-28 md:mt-0 ml-9  md:h-[500px] mt-9 ' src={pic4} alt="" />
              </div>
            </div>

          </div>
        </section>
        {/* uifry premium section */}
        <section>
          <div className='flex flex-col md:flex-row'>
            <div className='bg-no-repeat bg-top  ' style={{ backgroundImage: `url(${whyprim5})` }} >
              <div >
                <img src={primam1} alt="" />
              </div>
            </div>
            <div className='p-5 '>
              <div className='md:mt-9'>
                <p className='text-xl text-orange-500'>Features</p>
                <h1 className='text-[32px] font-semibold'>Uifry Premium</h1>
                <div className='mt-5'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <img src={primam4} alt="" />
                    </div>
                    <p className='font-semibold'>Budgeting Intervals</p>
                  </div>
                  <p className='text-gray-500'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                  </p>
                </div>
                <div className='mt-3'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <img src={primam2} alt="" />
                    </div>
                    <p className='font-semibold'>Budgeting Intervals</p>
                  </div>
                  <p className='text-gray-500'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                  </p>
                </div>
                <div className='mt-5'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <img src={primam3} alt="" />
                    </div>
                    <p className='font-semibold'>Budgeting Intervals</p>
                  </div>
                  <p className='text-gray-500'>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* why choose Uifry? section */}
        <section>
          <div className='flex flex-col md:flex-row'>
            <div className='p-5 md:w-[50%] md:h-[500px] flex flex-col  justify-center  '>
              <p className='text-[#FF5555]'>Advatnages</p>
              <h1 className='text-[32px] font-semibold'>Why Choose Uifry?</h1>
              <div className='my-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-[24px] h[24px]'>
                    <img src={whyprim1} alt="" />
                  </div>
                  <p className='text-xl'>Clever Notifications</p>
                </div>
              </div>
              <p className='text-gray-500'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
            <div className='md:w-[50%] h-full bg-no-repeat bg-top' style={{ backgroundImage: `url(${whyprim5})` }}>
              <img src={whyprim2} alt="" />
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-[50%] h-full bg-no-repeat bg-top' style={{ backgroundImage: `url(${whyprim6})` }}>
              <img src={whyprim3} alt="" />
            </div>
            <div className='p-5 md:w-[50%] md:h-[500px] flex flex-col  justify-center  '>
              <div className='my-3'>
                <div className='flex items-center gap-2'>
                  <div className='w-[24px] h[24px]'>
                    <img src={whyprim4} alt="" />
                  </div>
                  <p className='text-xl'>Fully Customizable</p>
                </div>
              </div>
              <p className='text-gray-500'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
            </div>
          </div>
        </section>
        {/* what our users say about us? section */}
        <section>
          <div className='text-center '>
            <p >Testimonial</p>
            <h1 className='md:text-[42px] font-semibold text-2xl'>What Our Users Say </h1>
            <h1 className='md:text-[42px] font-semibold text-2xl md:mt-2' >About us? </h1>
          </div>
          <div className='flex flex-col md:flex-row md:-mt-7 p-5'>
            <div>
              <div className='bg-no-repeat bg-left' style={{ backgroundImage: `url(${userpic3})` }}>
                <img src={userpic1} alt="" />
              </div>
            </div>
            <div className='md:mt-24 p-5 md:w-[48%]'>
              <h1 className='text-2xl'>The best financial accounting app ever!</h1>
              <p className='my-3 text-gray-500'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
              <div >
                <img src={userpic2} alt="" />
              </div>
              <p className='my-3 text-gray-500'>nick jonas</p>
            </div>
          </div>
        </section>
        {/* faq section */}
        <section>
          <div>
            <p className='text-[#FF5555]'>Faq</p>
            <h1 className='md:text-[42px] text-2xl'>Frequently Asked Questions</h1>
            <div className='mt-5 flex flex-col md:flex-row gap-4'>
              <div className='flex flex-col '>
                <div className='bg-[#FF5555] p-3 rounded-md text-gray-200' >
                  <h1 className='text-xl' >The best financial accounting app ever!</h1>
                  <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>
                <div className=' p-3 rounded-md'>
                  <h1 className='text-xl' >The best financial accounting app ever!</h1>
                  <p className='text-gray-600'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>
                <div className='bg-[#FF5555] p-3 rounded-md text-gray-200'>
                  <h1 className='text-xl' >The best financial accounting app ever!</h1>
                  <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                </div>
              </div>
              <div>
                <div className='flex flex-col '>
                  <div className=' p-3 rounded-md' >
                    <h1 className='text-xl' >The best financial accounting app ever!</h1>
                    <p className='text-gray-600'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                  </div>
                  <div className=' bg-[#FF5555] p-3 rounded-md text-gray-200'>
                    <h1 className='text-xl' >The best financial accounting app ever!</h1>
                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                  </div>
                  <div className=' p-3 rounded-md'>
                    <h1 className='text-xl ' >The best financial accounting app ever!</h1>
                    <p className='text-gray-600'> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </section>
        {/* ready to gate start section */}
        <section>
          <div>
            <div >
              <img className='md:mt-24' src={ready2} alt="" />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default App
