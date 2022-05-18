import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {

        console.log("data", data);
        //navigate("/appointment");
    };
    return (
        <div>
            <h2 className="text-3xl">Add a New Doctor</h2>
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
                        type="text" placeholder="Enter Doctor Name" class="input input-bordered w-full max-w-xs" />
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
                        type="email" placeholder="Enter Doctor Email" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specialty</span>
                    </label>
                    <input
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "Specialization is required"
                            }
                        })}
                        type="text" placeholder="Enter Doctor Specialty" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}

                    </label>
                </div>

                <input className="btn w-full max-w-xs" type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;