

function gantiNama() {
    let nama = prompt("Masukkan nama anda");
    if (nama && nama.trim() !== "") {
        document.getElementById("username").innerHTML = nama;
    } else {
        document.getElementById("username").innerHTML = "Guest";
    }
  }
  
  // Run when page loads
  window.addEventListener('DOMContentLoaded', function() {
    gantiNama();
  });
  
  // Add this to your existing script.js
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.tombol-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Optional: Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = menuButton.contains(event.target) || 
                                navLinks.contains(event.target);
            
            if (!isClickInside && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
  
    // Optional: Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
  });
  
  function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const genderInputs = document.getElementsByName('gender');
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !dob || !message) {
        alert('Please fill in all required fields');
        return false;
    }
    
    let selectedGender = '';
    for (const gender of genderInputs) {
        if (gender.checked) {
            selectedGender = gender.value;
            break;
        }
    }
    
    if (!selectedGender) {
        alert('Please select a gender');
        return false;
    }
    
    // Update output box
    document.getElementById('time').textContent = new Date().toLocaleString();
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = selectedGender;
    document.getElementById('outputMessage').textContent = message;
    
    // Show output box
    document.getElementById('output-box').style.display = 'block';
    
    return false; // Prevent form submission
  }
  
  // Optional: Add slide functionality for the homepage slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  // Initialize slider
  showSlide(0);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds