import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Download me resume.
          </p>
        </div>
        <div className="flex flex-row py-12 mx-auto h-1/2 justify-items-center">
          <button className="mx-auto bg-transparent hover:bg-white text-primary border-double border-4 border-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded hover:text-black">
            Download Docs
          </button>
        </div>
      </div>
    </>
  )
}
