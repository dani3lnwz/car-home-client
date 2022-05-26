import React from 'react';

const PartRow = ({tool, index, refetch, setDeletingPart}) => {
    const {name, availableQuantity, img} = tool;

    return (
        <tr>
        <th>{index + 1}</th>
        <td><div className="avatar">
            <div className="w-14 rounded-xl">
                <img src={img} alt={name} />
            </div>
            </div></td>
        <td>{name}</td>
        <td>{availableQuantity}</td>
        <td>
        <label onClick={() => setDeletingPart (tool)} for="delete-confirm-modal" class="btn btn-xs btn-error text-white">Delete</label>
        </td>
      </tr>
    );
};

export default PartRow;