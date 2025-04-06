

// Hide/show sections (React components should handle this via state)
export const loadSection = (sectionId) => {
  document.querySelectorAll('.page-section').forEach((section) => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
};

// Copy the server IP to clipboard
export const copyServerIp = (ip, port, setCopyStatus) => {
  const ipText = `${ip}:${port}`;
  navigator.clipboard
    .writeText(ipText)
    .then(() => {
      setCopyStatus('✓✓ Yes!! Copied! ✓✓');
      setTimeout(() => {
        setCopyStatus('Click to Copy IP ..');
      }, 2000);
    })
    .catch((err) => {
      console.error('Failed to copy IP:', err);
    });
};