const App = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#02004F]">
      {/* Sol Polygon */}
      <img
        src="/Polygon-1.svg"
        alt="Left Polygon"
        className="absolute left-0 top-10 bottom-10 w-1/3 max-w-[400px] z-0"
      />

      {/* Sağ Polygon */}
      <img
        src="/Polygon-2.svg"
        alt="Right Polygon"
        className="absolute right-0 top-10 bottom-10 w-1/3 max-w-[400px] z-0"
      />

      {/* Login Formu */}
      <div className="relative bg-transparent w-full max-w-md px-6 z-3">
        <h1 className="text-white opacity-50 text-6xl text-left font-bold mb-8 tracking-widest">
          LOGIN
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-transparent border border-gray-500 text-white focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-3/5 py-3 mt-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
export default App
