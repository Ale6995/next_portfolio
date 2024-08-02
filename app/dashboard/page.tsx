"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { getMessaging, getToken,} from 'firebase/messaging';
import { app, auth, db,  } from '../firebase/config';
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
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

interface QuickHireEntry {
    id: string;
    name: string;
    companyName: string;
    phone: string;
    address: string;
    position: string;
    payType: string;
    salaryMin: string;
    salaryMax: string;
    requirementDuration: string;
    startDate: string;
    paid: boolean;
}

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [quickHires, setquickHires] = useState<QuickHireEntry[]>([]);
    const [sortField, setSortField] = useState<string>('name');
    const [sortOrder, setSortOrder] = useState<string>('asc');
    const router = useRouter();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is signed in');
                setUser(user);
                fetchLeads();
                fetchquickHires();
                requestPermission();
            } else {
                router.push('/login');
                console.log('User is not signed in');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const requestPermission = async () => {
        
        try {
            
          await Notification.requestPermission();
          const messaging = getMessaging(app);
          if (!messaging) {
            return;
          }
          
          const currentToken =  await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY });
          if (currentToken) {
            console.log('Token:', currentToken);
            await addDoc(collection(db, "tokens"), {
                token: currentToken,
                timestamp: Date.now()
              });
          } 
        } catch (err) {
          console.error(err);
        }
      };
      
    



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

    const fetchquickHires = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "quickhire"));
            const entriesData: QuickHireEntry[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            } as QuickHireEntry));
            setquickHires(entriesData);
        } catch (error) {
            console.error("Error fetching QuickHire entries: ", error);
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

    const handlePaidChange = async (id: string, newValue: boolean) => {
        try {
            const entryDoc = doc(db, "quickhire", id);
            await updateDoc(entryDoc, { paid: newValue });
            setquickHires((prevEntries) =>
                prevEntries.map((entry) =>
                    entry.id === id ? { ...entry, paid: newValue } : entry
                )
            );
        } catch (error) {
            console.error("Error updating QuickHire entry: ", error);
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

    const exportToCSVhires = () => {
        const csv = Papa.unparse(quickHires);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'quickHires.csv');
    };

    const handleSortHires = (field: keyof QuickHireEntry) => {
        const order = field === sortField && sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedHires = [...quickHires].sort((a, b) => {
            console.log(a[field], b[field]);
            if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
            return 0;
        });
        setSortField(field);
        setSortOrder(order);
        setquickHires(sortedHires);
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
            <FloatingNav navItems={[{name:"leads",link:"#leads"},{name:"QuickHires",link:"#quickhires"}]} />
            <div className="container mx-auto mt-24 mb-24">
                <div className='flex justify-between items-center mb-4' id="leads">
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

                <div className="mt-16" id="quickhires">
                    <h2 className="mb-4 text-4xl font-bold text-brown">QuickHire Requests</h2>
                    <div className="overflow-x-auto">
                    <div className="flex justify-between items-center mb-4 mt-4">
                    <button onClick={() => handleSortHires('companyName')} className="px-4 py-2 bg-brown-300 text-brown rounded hover:bg-brown-500 focus:outline-none focus:ring focus:border-brown-500">
                        Sort by Company Name {sortField === 'companyName' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </button>
                    <button onClick={() => handleSortHires('paid')} className="px-4 py-2 bg-brown-300 text-brown rounded hover:bg-brown-500 focus:outline-none focus:ring focus:border-brown-500">
                        Sort by paid {sortField === 'paid' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </button>
                    <button onClick={exportToCSVhires} className="px-4 py-2 bg-brown text-white rounded hover:bg-brown-100 focus:outline-none focus:ring focus:border-brown">
                        Export to CSV
                    </button>
                </div>
                        <table className="min-w-full bg-transparent rounded-xl border-gray-200">
                            <thead className="bg-beige">
                                <tr>
                                    <th className="px-4 py-2 border-b">Name</th>
                                    <th className="px-4 py-2 border-b">Company Name</th>
                                    <th className="px-4 py-2 border-b">Phone</th>
                                    <th className="px-4 py-2 border-b">Address</th>
                                    <th className="px-4 py-2 border-b">Position</th>
                                    <th className="px-4 py-2 border-b">Pay Type</th>
                                    <th className="px-4 py-2 border-b">Salary Min</th>
                                    <th className="px-4 py-2 border-b">Salary Max</th>
                                    <th className="px-4 py-2 border-b">Requirement Duration</th>
                                    <th className="px-4 py-2 border-b">Start Date</th>
                                    <th className="px-4 py-2 border-b">Paid?</th>
                                </tr>
                            </thead>
                            <tbody className="bg-beige-100 rounded-2xl">
                                {quickHires.map((entry, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border-b">{entry.name}</td>
                                        <td className="px-4 py-2 border-b">{entry.companyName}</td>
                                        <td className="px-4 py-2 border-b">{entry.phone}</td>
                                        <td className="px-4 py-2 border-b">{entry.address}</td>
                                        <td className="px-4 py-2 border-b">{entry.position}</td>
                                        <td className="px-4 py-2 border-b">{entry.payType}</td>
                                        <td className="px-4 py-2 border-b">{entry.salaryMin}</td>
                                        <td className="px-4 py-2 border-b">{entry.salaryMax}</td>
                                        <td className="px-4 py-2 border-b">{entry.requirementDuration}</td>
                                        <td className="px-4 py-2 border-b">{entry.startDate}</td>
                                        <td className="px-4 py-2 border-b">
                                            <select
                                                value={entry.paid ? 'Yes' : 'No'}
                                                onChange={(e) =>
                                                    handlePaidChange(
                                                        entry.id,
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
            </div>
        </>
    );
};

export default Dashboard;
