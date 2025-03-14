import { mainLinks as mainLinksData } from '@/data';
import { create } from 'zustand';


type ActiveLinkProps = {
  mainLinks: string[],
  activeLink:string | null;
  set: (link: string) => void;
}


export const useActiveLink = create<ActiveLinkProps>((set) => ({
  mainLinks: mainLinksData,
  activeLink: null,
  set: (link: string) => set((state) => { 
    return {
      activeLink: link
    }
  })
}));

