import create from 'zustand';

const defaultWhomTags = {
  Alone: false,
  Friend: false,
  Lover: false,
  Spouse: false,
  Children: false,
  Parents: false,
  'Etc.': false,
};

const defaultStyleTags = {
  Activity: false,
  Healing: false,
  'Hot place': false,
  Shopping: false,
  Mukbang: false,
  Nature: false,
  Museum: false,
  'Etc.': false,
};

interface TSelectedTags {
  [key: string]: boolean;
}

interface ScheduleState {
  startDate: Date | null;
  endDate: Date | null;
  selectedTags: {
    Whom: TSelectedTags;
    Style: TSelectedTags;
  };

  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setSelectedTags: (
    category: 'Whom' | 'Style',
    tags: Record<string, boolean>,
  ) => void;
  reset: () => void;
}

const useScheduleStore = create<ScheduleState>(set => ({
  startDate: null,
  endDate: null,
  selectedTags: {
    Whom: {...defaultWhomTags},
    Style: {...defaultStyleTags},
  },

  setStartDate: date => set({startDate: date}),

  setEndDate: date => set({endDate: date}),

  setSelectedTags: (category, tags) =>
    set(state => ({
      selectedTags: {
        ...state.selectedTags,
        [category]: Object.keys(tags).reduce((acc, tag) => {
          if (tags[tag]) {
            acc[tag] = true;
          }
          return acc;
        }, {} as TSelectedTags),
      },
    })),

  reset: () =>
    set({
      startDate: null,
      endDate: null,
      selectedTags: {
        Whom: {...defaultWhomTags},
        Style: {...defaultStyleTags},
      },
    }),
}));

export default useScheduleStore;
