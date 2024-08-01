"use client"
import { useState, ChangeEvent, FormEvent, use, useEffect } from 'react';
import { auth } from '../firebase/config';
import { browserSessionPersistence, GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FloatingNav } from '@/components/ui/FloatingNav';

interface FormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/dashboard');
        } else {
            router.push('/login');
            console.log('User is not signed in');
        }
    });

    return () => unsubscribe();
}, [router]);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push('/dashboard');
      setFormData({ email: formData.email, password: '' });
    } catch (error) {
      setError((error as Error).message);
    }
  };
  


  return (
    
    <div className="flex items-center justify-center h-screen bg-pink">
<FloatingNav />
      <div className="p-6 bg-beige rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Sign In</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg bg-pink focus:outline-none focus:ring focus:border-brown" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg bg-pink focus:outline-none focus:ring focus:border-brown" />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-brown rounded-lg hover:bg-brown-100"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
    
  );
}
