import { create } from 'zustand';

type DialogsState = Record<string, { isOpen: boolean; data?: Record<string, any> }>;

type DialogsProps = {
  dialogs: DialogsState;
  openDialog: (dialogName: string, data?: Record<string, any>) => void;
  closeDialog: (dialogName: string) => void;
};

export const useDialogs = create<DialogsProps>((set) => ({
  dialogs: {
    confirmDeleteNote : { isOpen: false , data: {}},
    confirmDeleteTag: { isOpen: false, data: {}},
    confirmDeleteOneFlashNotes: { isOpen: false, data: {}},
    addTag: { isOpen: false, data: {}},
  },
  openDialog: (dialogName, data = {}) =>
    set((state) => {
      return {
        dialogs: {
          ...state.dialogs,
          [dialogName]: { isOpen: true, data },
        }
      }
    }),
  closeDialog: (dialogName) =>
    set((state) => ({
      dialogs: {
        ...state.dialogs,
        [dialogName]: { isOpen: false, data: {} },
      },
    })),
}));
