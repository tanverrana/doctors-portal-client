import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery("services", () => fetch("http://localhost:5000/service").then(res => res.json()))

    const imageStorageKey = "1087464023ac2b6949f371c9195dddbf";

    const onSubmit = async data => {
        console.log("data", data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    //send to your database
                }

            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }
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
                    <select {...register("specialty")} input-bordered class="select w-full max-w-xs">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>

                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Photo</span>

                    </label>
                    <input
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })}
                        type="file" placeholder="Enter Doctor Name" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}

                    </label>
                </div>

                <input className="btn w-full max-w-xs" type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;