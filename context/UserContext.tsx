import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { supabase } from '@/database/supabase';
import * as SecureStore from 'expo-secure-store';

interface User {
    f_name: string;
    l_name: string;
    status: string;
    role: string;
}

interface UserContextType {
    user: User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>();
    useEffect(()=>{
        const fetchUser = async () => {
            const user_id = await SecureStore.getItemAsync('user_id');
            const { data, error } = await supabase
                .from('user')
                .select('f_name, l_name, status, role')
                .eq('user_id', user_id);
    
            if (error) {
                console.error('Error fetching user data:', error.message);
                return;
            }
    
            setUser(data?.[0]); // Assuming you're expecting only one user
        };
        fetchUser();
    }, []);


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export { UserContext, UserProvider, useUser };
