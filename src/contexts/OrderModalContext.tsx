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
  idea?: string;
  budget?: string;
  timeline?: string;
};

type ModalType = 'order' | 'idea';

interface OrderModalContextType {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type?: ModalType, data?: PredefinedData) => void;
  closeModal: () => void;
  predefinedData: PredefinedData;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('order');
  const [predefinedData, setPredefinedData] = useState<PredefinedData>({});

  const openModal = (type: ModalType = 'order', data?: PredefinedData) => {
    setModalType(type);
    if (data) setPredefinedData(data);
    else setPredefinedData({});
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <OrderModalContext.Provider value={{ isOpen, modalType, openModal, closeModal, predefinedData }}>
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
