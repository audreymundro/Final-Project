//make page with email, password, and login button

function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" required />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;