import {useState, useEffect} from 'react'
import {useAuth0} from '@auth0/auth0-react';



const EditCompanies = () => {
    const [companydata, setCompanydata] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {getAccessTokenSilently, logout} = useAuth0();

    useEffect(() => {
        const fetchCompanyData = async () => {
          try {
            const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/setAll');
            const data = await response.json();
            setCompanydata(data.companies);
            

          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchCompanyData();
      }, []);

      if (isLoading) {
        return <div>Loading...</div>;
      }

        if (error) {
            return <div>{error}</div>;
        }

        const DeleteCompany = async (id) => {
            // verify that the user wants to delete the company
            if (window.confirm('Are you sure you want to delete this company?')) {
                try {
                    const token = await getAccessTokenSilently();
                    const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/companies/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                          },
                    });
                    const data = await response.json();
                    console.log(data);
                    // reload the page to show the updated list of companies
                    window.location.reload();
                } catch (error) {
                    console.log(error.message);
                }
            }
        }



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
            
            {companydata.map((company) => (
                <EditCompany key={company.id} company={company} deleteCompany={DeleteCompany} />
            ))}

        </table>
    </div>
    )
}

const EditCompany = ({company, deleteCompany}) => {
    return (
        <tr className='bg-slate-100 rounded-md' key={company.company_id}>
            <td className='p-2'>{company.company_name}</td>
            <td className='p-2'>{company.contact}</td>
            <td className='p-2'>{company.address}</td>
            <td className='p-2'>{company.description}</td>
            <td className='p-2'>{company.profession_name}</td>
            <td className='p-2'>{company.region_name}</td>
            <td className='p-2'><button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md'>Edit</button></td>
            <td className='p-2'><button className=' ease-out duration-300 hover:bg-gray-950 active:bg-white active:text-black bg-slate-600 p-2 font-bold text-white w-50 rounded-md' onClick={() => deleteCompany(company.company_id)}>Delete</button></td>
        </tr>
    )
}

export default EditCompanies