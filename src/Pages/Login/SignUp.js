import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let signInErrorMessage;

    if (user || gUser) {
        console.log(user || gUser);
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        signInErrorMessage = <p className="text-red-600">{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Please Register Now!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                                type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email"
                                    }
                                })}
                                type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character"
                                    }
                                })}
                                type="password" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInErrorMessage}
                        <input className="btn w-full max-w-xs" type="submit" value="Sign Up" />
                    </form>
                    <p><small>Already have an account? <Link className="text-secondary" to="/login">Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;