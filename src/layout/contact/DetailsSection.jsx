import {ArrowRightIcon} from '@heroicons/react/24/solid'
export default function DetailsSection() {
  return (
    <section className="flex max-lg:flex-col gap-20">
         <div className="max-w-md">
        <div className="border border-slate-200 w-20"></div>
        <h3 className=" text-5xl sm:text-7xl my-10 font-bold">
          Contact Details
        </h3>
      </div>
      <div className="my-10 sm:flex justify-between lg:flex-col">
      <div className="text-slate-600 mb-10">
        <h5 className="font-semibold mb-5">Main Office</h5>
        <p>
            Mail:&nbsp; archone@mail.com
        </p>
        <p>
            Address:&nbsp; 1892 Chenoweth Drive TN
        </p>
        <p>
            Phone:&nbsp; 123-456-4351
        </p>
      </div>
        <a href="#map" className="font-semibold flex gap-6 items-center  hover:underline">
        View on Map
        <ArrowRightIcon className='h-6' />
        </a>
      </div>

      <div className="my-10 sm:flex justify-between lg:flex-col">
      <div className="text-slate-600 mb-10">
        <h5 className="font-semibold mb-5">Office II</h5>
        <p>
            Mail:&nbsp; archtwo@mail.com
        </p>
        <p>
            Address:&nbsp; 3399 Wines Lane Tx
        </p>
        <p>
            Phone:&nbsp; 832-123-4321
        </p>
      </div>
        <a href="#map" className="font-semibold flex gap-6 items-center  hover:underline">
        View on Map
        <ArrowRightIcon className='h-6' />
        </a>
      </div>
    </section>
  )
}
