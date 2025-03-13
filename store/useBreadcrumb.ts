import { LucideProps } from 'lucide-react';
import { create } from 'zustand';
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { BreadcrumbItem } from '@/components/ui/breadcrumb';
import { BreadcrumbItemType } from '@/types/breadcrumb';



type BreadcrumbsProps = {
  breadcrumbsList: BreadcrumbItemType[]
  set: (breadcrumbItems: BreadcrumbItemType[]) => void;
  add: (breadcrumbItem:BreadcrumbItemType) => void;
  reset: () => void;
  remove: (label: string) => void;
}


export const useBreadcrumbs = create<BreadcrumbsProps>((set) => ({
  breadcrumbsList: [],
  set: (breadcrumbItems) => set((state) => { 
    return {
      breadcrumbsList: [...breadcrumbItems]
    }
  }),
  add: (breadcrumbItem) => set((state) => {
    return{
      breadcrumbsList: [...state.breadcrumbsList,breadcrumbItem]
    }
  }),
  remove: (label) => set((state) => {
    return {
      breadcrumbsList: state.breadcrumbsList.filter((breadcrumbItem) => breadcrumbItem.label !== label)
    }
  }),
  reset: () => set((state) => {
    return {
      breadcrumbsList: []
    }
  })
}));

