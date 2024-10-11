import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTokenStore = create(
  devtools(
    persist(
      (set) => ({
        token: '',
        userId: null,
        setToken: (data) => set(() => ({ token: data })),
        setUserId: (data) => set(() => ({ userId: data })),
      }),
      { name: 'token-store' }
    )
  )
);

export default useTokenStore;
