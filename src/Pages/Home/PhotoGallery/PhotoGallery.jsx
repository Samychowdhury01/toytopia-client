import React from 'react';
import photo1 from '../../../assets/images/photoGallery/photo-1.png'
import photo2 from '../../../assets/images/photoGallery/photo-2.png'
import photo3 from '../../../assets/images/photoGallery/photo-4.png'
import photo4 from '../../../assets/images/photoGallery/photo-3.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PhotoGallery = () => {
    return (
        <div className='my-32 p-5'>
            <div  className='text-center space-y-5'>
            <h1 className='text-center font-extrabold text-5xl'>Explore our Photo Gallery<span className="text-[#FFBB00] font-extrabold">.</span></h1>
            <p className='md:w-1/2 mx-auto text-gray-600'>Ignite your imagination in our enchanting Toy Photo Gallery. Step into a world where toys come alive, embarking on whimsical adventures.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-5 md:p-5 mt-5">
        <div className='md:col-span-2'>
          <LazyLoadImage alt="toy-images" effect="blur" src={photo1} className='rounded-xl md:w-[100vw] md:h-[400px] object-cover' />
        </div>
        <div>
          <LazyLoadImage alt="toy-images" effect="blur" src={photo2} className='rounded-xl' />
        </div>
        <div>
          <LazyLoadImage alt="toy-images" effect="blur" src={photo3} className='rounded-xl'/>
        </div>
        <div className='md:col-span-2'>
          <LazyLoadImage alt="toy-images" effect="blur" src={photo4} className='rounded-xl md:w-[100vw] md:h-[400px] object-cover'  />
        </div>
      </div>
        </div>
    );
};

export default PhotoGallery;