

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
       <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
        <form action="" className="space-y-3 ">
            <div>
                <label className="block text-lg font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
            </div>
              <div>
                <label className="block text-lg font-medium" htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Your Password" className="mt-1 w-full border border-gray-500 px-3 py-2 rounded"/>
            </div>
            <button className="w-full bg-black text-white py-2 mt-3 rounded hover:bg-gray-500">Login</button>
        </form>
       </div>
    </div>
  )
}

export default Login
