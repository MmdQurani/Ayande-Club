// hooks/usePrimaryModal.js
import { useState } from 'react';

export default function usePrimaryModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const openModal = (reward) => {
    setSelectedReward(reward);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReward(null);
  };

  return {
    isModalOpen,
    selectedReward,
    openModal,
    closeModal
  };
}
