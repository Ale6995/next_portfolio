"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { BounceLoader } from 'react-spinners';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    additionalInfo: string;
    contacted: boolean;
}

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [sortField, setSortField] = useState<string>('name');
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is signed in');
                setUser(user);
                fetchLeads();
            } else {
                router.push('/login');
                console.log('User is not signed in');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const fetchLeads = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "leads"));
            const leadsData: Lead[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            } as Lead));
            setLeads(leadsData);
        } catch (error) {
            console.error("Error fetching leads: ", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            router.push('/login');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const handleContactedChange = async (id: string, newValue: boolean) => {
        try {
            const leadDoc = doc(db, "leads", id);
            await updateDoc(leadDoc, { contacted: newValue });
            setLeads((prevLeads) =>
                prevLeads.map((lead) =>
                    lead.id === id ? { ...lead, contacted: newValue } : lead
                )
            );
        } catch (error) {
            console.error("Error updating lead: ", error);
        }
    };

    const handleSort = (field: keyof Lead) => {
        const order = field === sortField && sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedLeads = [...leads].sort((a, b) => {
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
            return 0;
        });
        setSortField(field);
        setSortOrder(order);
        setLeads(sortedLeads);
    };

    const exportToCSV = () => {
        const csv = Papa.unparse(leads);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'leads.csv');
    };

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <BounceLoader color="#8C644F" size={60} />
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <>
            <FloatingNav />
            <div className="container mx-auto mt-24">
                <div className='flex justify-between items-center mb-4'>
                    <h1 className="mb-4 text-4xl font-bold text-brown">Leads</h1>
                    <button onClick={logout} className='px-4 py-2 font-bold text-brown bg-pink rounded hover:bg-red-300 focus:outline-none focus:ring focus:border-red-300'>Sign out</button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => handleSort('name')} className="px-4 py-2 bg-brown-300 text-brown rounded hover:bg-brown-500 focus:outline-none focus:ring focus:border-brown-500">
                        Sort by Name {sortField === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </button>
                    <button onClick={() => handleSort('contacted')} className="px-4 py-2 bg-brown-300 text-brown rounded hover:bg-brown-500 focus:outline-none focus:ring focus:border-brown-500">
                        Sort by Contacted {sortField === 'contacted' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </button>
                    <button onClick={exportToCSV} className="px-4 py-2 bg-brown text-white rounded hover:bg-brown-100 focus:outline-none focus:ring focus:border-brown">
                        Export to CSV
                    </button>
                </div>
                <div className="overflow-x-auto mt-10">
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
                                    <td className="px-4 py-2 border-b">{lead.additionalInfo}</td>
                                    <td className="px-4 py-2 border-b">
                                        <select
                                            value={lead.contacted ? 'Yes' : 'No'}
                                            onChange={(e) =>
                                                handleContactedChange(
                                                    lead.id,
                                                    e.target.value === 'Yes'
                                                )
                                            }
                                            className="px-2 py-1 border rounded focus:outline-none"
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
