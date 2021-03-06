import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingPart, refetch, setDeletingPart}) => {
    const {_id, name} = deletingPart;
    const handleDelete = id => {
        fetch(`https://calm-everglades-69368.herokuapp.com/part/${id}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`${name} is deleted.`)
                setDeletingPart(null)
                refetch()
            }
        })
    }
    return (
        <div>




<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete ${name} ?</h3>
                    <p class="py-4 text-yellow-500">If you delete it, it will be deleted from database also!</p>
                    <div class="modal-action">

                    <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;