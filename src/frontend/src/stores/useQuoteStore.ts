import { create } from "zustand";

interface QuoteStore {
  isOpen: boolean;
  defaultProduct: string;
  openQuote: (product?: string) => void;
  closeQuote: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  isOpen: false,
  defaultProduct: "",
  openQuote: (product = "") => set({ isOpen: true, defaultProduct: product }),
  closeQuote: () => set({ isOpen: false, defaultProduct: "" }),
}));
