document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submissionMessage = document.getElementById('submissionMessage');
    
    form.addEventListener('submit', (e) => {
       
        e.preventDefault(); 
        
      
        form.style.display = 'none';
     
        submissionMessage.classList.remove('hidden');
    });
});