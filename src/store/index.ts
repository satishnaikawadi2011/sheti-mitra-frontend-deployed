import create from 'zustand';

export type ActiveLinkType = '/' | '/recommend-crop';

type AppStore = {
	activeLink: ActiveLinkType;
	setActiveLink: (link: ActiveLinkType) => void;
};

export const useAppStore = create<AppStore>((set: any, get) => ({
	activeLink: '/',
	setActiveLink: (link) => set((state: AppStore) => set({ ...state, activeLink: link }))
}));
