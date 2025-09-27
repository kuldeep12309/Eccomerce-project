import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        alert(`Welcome ${data.username}`);
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4  ">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 dark:text-black shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    {/* Username */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-black dark:text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            autoComplete="new-username"
                            {...register("username", { required: true })}
                            className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border ${errors.username ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white`}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">Username is required</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            autoComplete="new-password"
                            {...register("password", { required: true })}
                            className={`mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border ${errors.password ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">Password is required</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
