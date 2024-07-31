"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/config';

interface Lead {
  name: string;
  email: string;
  phone: string;
  comment: string;
  contacted: boolean;
}

const leads: Lead[] = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', comment: 'Interested in product X', contacted: true },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', comment: 'Needs more information about service Y', contacted: false },
  { name: 'Bob Johnson', email: 'bob@example.com', phone: '456-789-0123', comment: 'Follow up next week', contacted: true },
  { name: 'Alice Brown', email: 'alice@example.com', phone: '321-654-0987', comment: 'Send pricing details', contacted: false },
  { name: 'Charlie Davis', email: 'charlie@example.com', phone: '654-987-1234', comment: 'Requesting a demo', contacted: true },
];

const Dashboard = () => {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();

  useEffect(() => {
//    if( auth.currentUser){
//     setUser(auth.currentUser);
//     console.log('User is signed in');
//    }
//    else{    
//     router.push('/login');
//     console.log('User is not signed in');
//    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
        setUser(user);
      } else {
        router.push('/login');
        console.log('User is not signed in');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    // router.push('/login');
    return <p>Loading...</p>;
  }

  return (
      <div className="container mx-auto mt-8">
        <h1 className="mb-4 text-2xl font-bold text-brown">Leads</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent  rounded-xl border-gray-200">
            <thead className='bg-beige'>
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Phone Number</th>
                <th className="px-4 py-2 border-b">Comment</th>
                <th className="px-4 py-2 border-b">Contacted</th>
              </tr>
            </thead>
            <tbody className='bg-beige-100 rounded-2xl'>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{lead.name}</td>
                  <td className="px-4 py-2 border-b"><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                  <td className="px-4 py-2 border-b"><a href={`tel:${lead.phone}`}> {lead.phone}</a></td>
                  <td className="px-4 py-2 border-b">{lead.comment}</td>
                  <td className="px-4 py-2 border-b">{lead.contacted ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Dashboard;
