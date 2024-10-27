import {create} from 'zustand';

type Language = 'kr' | 'en' | 'jp' | 'cn' | null;

interface UserLanguageState {
  language: string;
  getLanguage: () => string;
  setLanguage: (lang: string) => void;
}

const useUserLanguage = create<UserLanguageState>((set, get) => ({
  language: '',
  getLanguage: () => get().language,
  setLanguage: lang => set({language: lang}),

  reset: () =>
    set({
      language: '',
    }),
}));

export default useUserLanguage;
