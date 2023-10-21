import { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
    const { googleLogin, createLogin, setIsLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    const location = useLocation();
    const [showPass, setShowPass] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setErr(null);

        createLogin(email, password)
            .then((res) => {
                const user = res.user;
                if (user) {
                    const updateUser = {
                        name: user.displayName,
                        email: user.email,
                        createdAt: user.metadata?.creationTime,
                        lastSignInTime: user.metadata?.lastSignInTime,
                    };
                    fetch('https://techhub-server-oh56wbkoz-mohammad-alis-projects.vercel.app/edit-user', {
                        method: 'PUT',
                        body: JSON.stringify(updateUser),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((res) => res.json())
                        .then(() => {
                            toast.success('Login success!');
                            navigate(location?.state ? location.state : '/');
                        })
                        .catch((err) => {
                            setErr(err.code);
                            setIsLoading(false);
                        });
                }
            })
            .catch((err) => {
                setErr(err.code);
                setIsLoading(false);
            });
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const user = res.user
                const updateUser = {
                    name: user.displayName,
                    email: user.email,
                    createdAt: user.metadata?.creationTime,
                    lastSignInTime: user.metadata?.lastSignInTime,
                };
                try {
                    fetch('https://techhub-server-oh56wbkoz-mohammad-alis-projects.vercel.app/edit-user', {
                        method: 'PUT',
                        body: JSON.stringify(updateUser),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((res) => res.json())
                        .then(() => {
                            toast.success('Login success!');
                            navigate(location?.state ? location.state : '/');
                        })
                        .catch((err) => {
                            setErr(err.code);
                            setIsLoading(false);
                        });
                } catch (error) {
                    console.log(error);
                }
            })
            .catch((err) => {
                setErr(err.code);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center px-5 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-slate-50 dark:bg-[#111827] rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-5 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleLogin}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border dark:bg-slate-800 dark:border-slate-700 border-gray-300 text-gray-900 dark:text-white focus:outline-none sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                                placeholder="Enter Email Address"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                id="password"
                                className="bg-gray-50 dark:bg-slate-800 dark:border-slate-700 border focus:outline-none border-gray-300 text-gray-900 dark:text-white sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                                placeholder="Enter Password"
                                required
                            />
                            <span
                                onClick={() => {
                                    !setShowPass(!showPass);
                                }}
                                className="absolute right-3 top-10 text-gray-700 dark:text-slate-300 text-md cursor-pointer">
                                {showPass ? (
                                    <FiEyeOff></FiEyeOff>
                                ) : (
                                    <FiEye></FiEye>
                                )}
                            </span>
                        </div>
                        {err ? <p className="text-red-600">{err}</p> : ''}
                        <button
                            type="submit"
                            className="w-full text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign in
                        </button>
                    </form>
                    <div>
                        <p className="text-center text-gray-700 text-sm pb-3">
                            Or
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center gap-2">
                                {' '}
                                <span className="text-lg ">
                                    <FcGoogle></FcGoogle>
                                </span>{' '}
                                Login With Google
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-center font-light text-gray-500">
                        Don’t have an account yet?{' '}
                        <Link
                            to="/register"
                            className="font-medium text-primary dark:text-white hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
