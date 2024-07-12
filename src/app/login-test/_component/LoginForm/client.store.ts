import { create } from 'zustand';

export type LoginActionStateStore = {
  pending: boolean;
  setPending: (pendingState: boolean) => void;
  transaction: <R>(callback: () => Promise<R>, catchError?: (error: unknown) => void) => Promise<R>;
};

export const useLoginActionStateStore = create<LoginActionStateStore>((set) => ({
  pending: false,
  setPending: (pendingState) => set(() => ({ pending: pendingState })),
  transaction: async (callback, catchError) => {
    set(() => ({ pending: true }));
    return new Promise((resolve, reject) => {
      callback()
        .then(resolve)
        .catch(catchError || reject)
        .finally(() => set(() => ({ pending: false })));
    });
  },
}));
