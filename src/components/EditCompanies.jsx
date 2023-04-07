import {useState, useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react';

const EditCompanies = () => {
    return (
        <div className=' bg-slate-200 p-3 m-3 flex flex-col rounded-md gap-4'>
        <h1 className=' text-lg m-2 '>Edit and Delete companies </h1>
        <table className='border-none outline-none rounded-md bg-slate-100 '>
            <tr className=' bg-slate-400 rounded-md'>
                <th className='p-2'>Name</th>
                <th className='p-2'>Contact</th>
                <th className='p-2'>Address</th>
                <th className='p-2'>Description</th>
                <th className='p-2'>Region</th>
                <th className='p-2'>Profession</th>
                <th className='p-2'>Edit</th>
                <th className='p-2'>Delete</th>
            </tr>
            <tr >
                <td className='p-2'>Company1</td>
                <td className='p-2'>Contact1</td>
                <td className='p-2'>Address1</td>
                <td className='p-2'>Description1</td>
                <td className='p-2'>Region1</td>
                <td className='p-2'>Profession1</td>
                <td className='p-2'><button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md'>Edit</button></td>
                <td className='p-2'><button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md'>Delete</button></td>
            </tr>
        </table>
    </div>
    )
}

export default EditCompanies
