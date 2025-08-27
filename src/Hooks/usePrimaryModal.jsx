// hooks/usePrimaryModal.js
import { useState } from 'react';

export default function usePrimaryModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openModal = (type, reward) => {
    setModalType(type);
    setSelectedReward(reward);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReward(null);
    setModalType(null);
  };

  return {
    isModalOpen,
    selectedReward,
    modalType,
    openModal,
    closeModal
  };
}
