import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import usePayments from '../../hooks/usePayments';
import { RiUserShared2Fill } from 'react-icons/ri';

const ClientDetails = () => {
  const { id } = useParams(); 
  const [orderPayments] = usePayments(); 
  const [client, setClient] = useState(null); 
  useEffect(() => {
    if (orderPayments && orderPayments.length > 0) { 
      const foundClient = orderPayments.find(client => client._id === id); 
      setClient(foundClient);
    }
  }, [id, orderPayments]);
  if (!client) return <div>Loading client details...</div>;

  return (
    <>
      <h1 className='mt-20 mb-2 ml-5 text-dark-green text-regular font-sf-bold uppercase'>Client's Details:</h1>
      <div className='w-[95%] flex gap-5 mb-20 mx-auto border p-10 rounded-xl border-dark-green min-h-screen'>
        <div className='w-[30%] border-r'>
          <div className='border-4 border-dark-green rounded-2xl w-[150px] h-[150px] overflow-hidden flex justify-center items-center'>
            {client.imageURL ? <img src={client.imageURL} alt="" /> : <RiUserShared2Fill style={{ fontSize: '120px' }} />}
          </div>
          <br />
          <div>
            <p className='text-dark-green font-sf-regular text-regular'><strong>Name:</strong> {client.name ? client.name : <span className='text-red-500'>No Name</span>}</p>
            <p className='text-dark-green font-sf-regular text-regular'><strong>Email:</strong> <span className='text-lg'>{client.email}</span></p>
            <p className='text-dark-green font-sf-regular text-regular'><strong>Customer ID:</strong> {client._id}</p>
            <p className='text-dark-green font-sf-regular text-regular'><strong>Total Purchases:</strong> {client.purchased.length}</p>
            <p className='text-dark-green font-sf-regular text-regular'><strong>Total Spent:</strong> ${client.purchased.reduce((total, item) => total + parseFloat(item.price), 0)}</p>
          </div>
        </div>
        <div className='w-[60%]'>
          <h1 className='text-dark-green font-sf-regular text-regular-lite'>{client.name ? client.name : "Client's"} Order:</h1>

          <div className='space-y-4'>
            {client.purchased.map((item, index) => (
              <div key={index} className='p-4 border rounded-lg shadow-md'>
                 <div className='flex gap-3'>
                  {item.logoImg.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Logo ${item.logoName} image ${idx + 1}`}
                      className='w-24 h-24 object-cover rounded-lg'
                    />
                  ))}
                </div>
                <h2 className='text-regular font-semibold text-dark-green'>{item.logoName}</h2>
                <p className='text-dark-green font-sf-regular text-regular'>
                  <strong>Logo ID:</strong> {item.logoId}
                </p>
                <p className='text-dark-green font-sf-regular text-regular'>
                  <strong>Price:</strong> ${item.price}
                </p>
                <p className='text-dark-green font-sf-regular text-regular'>
                  <strong>Zip File:</strong> <a href={item.zipFile} target="_blank" rel="noopener noreferrer" className="text-blue-500">Download</a>
                </p>
                <Link
  to={`/give-us-a-review/${item.logoId}`}
  state={{ logoId: item.logoId, logoName: item.logoName }}
>
  <button className='text-dark-green font-sf-regular tex-regular border bg-atlantis-green px-6 py-2 rounded-lg'>
    Take a Review
  </button>
</Link>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetails;
