import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '1acc75709652536edea929de597a8fba'

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const part = {
                    name: data.name,
                    description: data.description,
                    rating: data.rating,
                    img: img
                }
                fetch('https://calm-everglades-69368.herokuapp.com/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(part)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Part added successfully')
                        reset();
                    }
                    else{
                        toast.error('failed to add Part')
                    }
                })
            }
          
        })
    }

    return (
        
        <div>
            <h2 className="text-2xl">Add A Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="Name"
                        placeholder="Name" 
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                {/* description */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description" 
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                {/* location*/}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input
                        type="number"
                        placeholder="rating" 
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                </div>
                {/* img */}
                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Price" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default MyReview;