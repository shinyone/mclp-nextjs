import React from "react";

const Quicknav = () => {
  const sections = [
    { id: "info-section", label: "Info" },
    { id: "discord-section", label: "Discord" },
    { id: "map-section", label: "Map" },
    { id: "vote-section", label: "Vote" },
    { id: "ranks-section", label: "Ranks" },
    { id: "store-section", label: "Store" },
    { id: "faq-section", label: "FAQ" },
    { id: "contact-section", label: "Contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Hide all sections
      document.querySelectorAll(".page-section").forEach((sec) => {
        (sec as HTMLElement).style.display = "none";
      });

      // Show the selected section
      (section as HTMLElement).style.display = "block";
    }
  };

  return (
    <div className="mb-3 flex flex-wrap justify-center items-center">
      {sections.map((section) => (
        <button
          key={section.id}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-2 min-w-[100px] h-8 flex items-center justify-center"
          onClick={() => handleNavigation(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default Quicknav;
