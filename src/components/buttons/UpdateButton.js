import { useState } from "react";

const UpdateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return <div></div>;
};

export default UpdateButton;
