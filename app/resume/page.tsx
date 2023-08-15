export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
             Download Resume
          </h1 >
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Get details of all my professional carrier in docx format 
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap justify-center m-20">
            <button
              className="border-solid border-2 w-1/4 h-8 outline outline-offset-2 outline-4"
            >
            Download .Docx
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
