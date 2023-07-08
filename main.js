function searchCandidates() {
    // Fetch candidates based on location and job role
    const location = document.getElementById('location').value;
    const jobRole = document.getElementById('jobRole').value;
  
    // Dummy data for testing
    const candidates = [
      { name: 'Bhavna', location: 'india', jobRole: 'Software Developer' },
      { name: 'Ankita', location: 'india', jobRole: 'UI/UX Designer' },
    ];
  
    const candidatesSection = document.getElementById('candidatesSection');
    candidatesSection.innerHTML = ''; // Clear previous results
  
    candidates.forEach(candidate => {
      const candidateElement = document.createElement('div');
      candidateElement.innerHTML = `<h3>${candidate.name}</h3>
                                    <p>Location: ${candidate.location}</p>
                                    <p>Job Role: ${candidate.jobRole}</p>`;
      candidatesSection.appendChild(candidateElement);
    });
  }

// Login Page
const loginButton = document.querySelector('.login');
loginButton.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

// Register Page
const registerButton = document.querySelector('.register');
registerButton.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

// Candidate Search Page
const searchButton = document.querySelector('.search');
searchButton.addEventListener('click', function() {
  const location = document.getElementById('location').value;
  const jobRole = document.getElementById('jobRole').value;
});

  