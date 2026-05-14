function LoginItem() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg w-96">
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="password" id="password" required />
                    </div>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginItem;