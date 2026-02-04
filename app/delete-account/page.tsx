'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';

export default function DeleteAccountPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleDeleteAccount = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // 1. Sign in the user to authenticate
            const { data: { session }, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) throw signInError;
            if (!session) throw new Error('Failed to create session');

            // 2. Insert deletion request into Supabase table
            const { error: insertError } = await supabase
                .from('DeleteAccountRequest')
                .insert([
                    {
                        user_id: session.user.id,
                        email: session.user.email,
                        status: 'pending'
                    }
                ]);

            if (insertError) {
                console.error("Insertion Error", insertError);
                throw new Error("Could not submit request. Please try again.");
            }

            setSuccess(true);
            await supabase.auth.signOut();

        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted</h2>
                    <p className="text-gray-600">Your account deletion request has been submitted to the admin team for review.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-8 py-6 bg-red-50 border-b border-red-100">
                    <div className="flex justify-center mb-4">
                        <AlertTriangle className="h-12 w-12 text-red-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-red-600">Delete Account</h1>
                    <p className="text-center text-red-800 mt-2 text-sm">
                        Warning: This action is permanent and cannot be undone. All your data will be erased.
                    </p>
                </div>

                <form onSubmit={handleDeleteAccount} className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                Deleting...
                            </>
                        ) : (
                            'Permanently Delete Account'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}