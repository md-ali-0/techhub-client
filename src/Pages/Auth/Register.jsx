import { useContext, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
    const { googleLogin, createRegister, editProfile, setIsLoading } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    const [showPass, setShowPass] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        setErr(null);

        const regexCap = /[A-Z]/;
        const regexSep = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        if (password.length < 6) {
            setErr('The password is less than 6 characters');
            return;
        }
        if (!regexCap.test(password)) {
            setErr("The password don't have a capital letter");
            return;
        }
        if (!regexSep.test(password)) {
            setErr("The password don't special character");
            return;
        }
        try {
            const res = await createRegister(email, password);
            const user = res.user;

            await editProfile({
                displayName: displayName,
                photoURL: photoURL,
            });
            const newUser = {
                name: user.displayName,
                email: user.email,
                createdAt: user.metadata?.creationTime,
                lastSignInTime: user.metadata?.lastSignInTime,
            };
            try {
                const resposne = await fetch('http://localhost:8080/add-user', {
                    method: 'POST',
                    body: JSON.stringify(newUser),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = resposne.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            toast.success('Registration success!');
            navigate('/login');
        } catch (err) {
            setErr(err.code);
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const user = res.user
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    createdAt: user.metadata?.creationTime,
                    lastSignInTime: user.metadata?.lastSignInTime,
                };
                try {
                    fetch('http://localhost:8080/edit-user', {
                        method: 'PUT',
                        body: JSON.stringify(newUser),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
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
                        Register
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleRegister}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border dark:bg-slate-800 dark:border-slate-700 border-gray-300 text-gray-900 dark:text-white focus:outline-none sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                                placeholder="Enter Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="photo"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your Photo URl:
                            </label>
                            <input
                                type="url"
                                name="photo"
                                id="photo"
                                className="bg-gray-50 border dark:bg-slate-800 dark:border-slate-700 border-gray-300 text-gray-900 dark:text-white focus:outline-none sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                                placeholder="Enter Photo URL"
                                required
                            />
                        </div>
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
                                className="bg-gray-50 dark:bg-slate-800 dark:border-slate-700 border focus:outline-none border-gray-300 dark:text-white text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
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
                        {err ? (
                            <p className="text-red-600 text-center">{err}</p>
                        ) : (
                            ''
                        )}
                        <button
                            type="submit"
                            className="w-full text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign Up
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
                                Sign Up With Google
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-center font-light text-gray-500">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-primary dark:text-white hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
