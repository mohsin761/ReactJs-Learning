function Card() {
  return (
    <div className="w-80 overflow-hidden rounded-3xl bg-white shadow-xl">

      {/* Top Image Section */}
      <div className="relative h-48 bg-blue-100">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="Profile"
            className="h-36 w-36 rounded-full border-8 border-white object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-16 text-center">

        <h1 className="text-3xl font-bold text-mauve-950">
  Mohsin Aslam
</h1>
        <p className="mt-2 text-lg text-gray-500">
          Frontend Developer
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gray-200"></div>

          <div className="h-1 w-16 rounded-full bg-blue-600"></div>

          <div className="h-px w-16 bg-gray-200"></div>
        </div>

        {/* Location */}
        <div className="mb-6 flex items-center justify-center gap-2 text-lg text-gray-600">
          <span className="text-2xl">📍</span>
          <span>Pakistan</span>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg">
          View Profile →
        </button>

      </div>
    </div>
  )
}

export default Card