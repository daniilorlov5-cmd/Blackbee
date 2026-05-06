import React, { createContext, useContext, useState, ReactNode } from 'react';

type PredefinedData = {
  material?: string;
  construction?: string;
  sizeX?: number;
  sizeY?: number;
  sizeZ?: number;
  thickness?: number;
  source?: string;
  contact?: string;
  phone?: string;
  telegram?: string;
  role?: string;
  notes?: string;
  estimatedPrice?: number;
  estimatedWeight?: number;
};

interface OrderModalContextType {
  isOpen: boolean;
  openModal: (data?: PredefinedData) => void;
  closeModal: () => void;
  predefinedData: PredefinedData;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [predefinedData, setPredefinedData] = useState<PredefinedData>({});

  const openModal = (data?: PredefinedData) => {
    if (data) setPredefinedData(data);
    else setPredefinedData({});
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <OrderModalContext.Provider value={{ isOpen, openModal, closeModal, predefinedData }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);
  if (context === undefined) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
}
