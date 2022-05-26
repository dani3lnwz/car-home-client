import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartRow from './PartRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageParts = () => {

    const [deletingPart, setDeletingPart] = useState(null);

    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Parts: {parts.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((tool, index) => <PartRow
                                key={tool._key}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                                setDeletingPart={setDeletingPart}
                            ></PartRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingPart && <DeleteConfirmModal
                deletingPart={deletingPart}
                refetch={refetch}
                setDeletingPart={setDeletingPart}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageParts;