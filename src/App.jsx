import { useState } from "react";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import "./App.css"; // Global CSS


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabsData = [
    { label: "Home", content: <p>Welcome to the Home Tab 🏠</p> },
    { label: "Profile", content: <p>Here is your Profile Info 👤</p> },
    { label: "Settings", content: <p>Manage your Settings ⚙️</p> },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Modal + Tabs Combo ✨</h1>

      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="modal-heading">Modal with Tabs</h2>
        <Tabs tabs={tabsData} />
      </Modal>
    </div>
  );
}

export default App;
