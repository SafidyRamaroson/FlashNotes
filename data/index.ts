import { NotepadText, Star, Tags } from "lucide-react";

export const menuItems = [
  {
      title: "Mes notes",
      url: "/notes/all",
      icon: NotepadText,
  },
  {
      title: "Tags",
      url: "/notes/tags",
      icon: Tags
  },
  {
      title: "Revoir",
      url: "/notes/review",
      icon: Star
  }
]

export const mainLinks = menuItems.map(({url}) => url);