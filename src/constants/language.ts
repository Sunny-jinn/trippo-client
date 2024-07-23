export const languages: readonly TLanguage[] = [
  {
    name: 'Korean',
    lang: 'ko',
  },
  {
    name: 'English',
    lang: 'en',
  },
  {
    name: 'Chinese',
    lang: 'cn',
  },
  {
    name: 'Japanese',
    lang: 'jp',
  },
] as const;

export interface TLanguage {
  name: string;
  lang: string;
}
