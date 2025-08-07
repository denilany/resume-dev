document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');

    // Validation messages
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    // Back to top functionality
    const backToTopBtn = document.getElementById('back-to-top');

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');

    // Update footer year
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    // Mobile menu toggle functionality
    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.contains('active');

        if (isActive) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close mobile menu when clicking on a link
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners for mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking on navigation links and handle smooth scrolling
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');

            // Close the mobile menu first
            closeMobileMenu();

            // Handle smooth scrolling to target section
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Small delay to allow menu to close first
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuBtn && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize - close mobile menu if screen becomes large
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            closeMobileMenu();
        }
    });

    // Add smooth scrolling to desktop navigation links as well
    const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');

            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form validation
    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameError.classList.add('show');
            return false;
        }
        nameError.classList.remove('show');
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.classList.add('show');
            return false;
        }
        emailError.classList.remove('show');
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        if (message.length < 10) {
            messageError.classList.add('show');
            return false;
        }
        messageError.classList.remove('show');
        return true;
    }

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    // Form submission
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            // Simulate form submission
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                successMessage.classList.add('show');
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
                
                // Reset form
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 3000);
            }, 1000);
        }
    });

    // Back to top functionality
    backToTopBtn.addEventListener('click', function() {
        const heroSection = document.getElementById('home');
        if (heroSection) {
            heroSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Show/hide back to top button based on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0.7';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // View Projects button scroll to projects section
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function() {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // GitHub Projects Integration
    async function fetchGitHubProjects() {
        const username = 'denilany';
        const selectedRepos = ['JS-framework', 'Task-Bit', 'social-app'];
        
        try {
            const repos = await Promise.all(
                selectedRepos.map(async (repoName) => {
                    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
                    if (response.ok) return response.json();
                    return null;
                })
            );
            
            const validRepos = repos.filter(repo => repo !== null);
            displayProjects(validRepos);
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
            showProjectsError();
        }
    }

    function displayProjects(repos) {
        const container = document.getElementById('projects-container');
        const loading = document.getElementById('projects-loading');
        
        loading.style.display = 'none';
        container.style.display = 'grid';
        
        container.innerHTML = repos.map(repo => `
            <div class="project-card flex flex-col gap-3 pb-3 p-4 rounded-lg border border-[#326767] bg-[#193333] hover:bg-[#234848] transition-all duration-300">
                <div class="w-full bg-gradient-to-br from-[#11e3e3] to-[#326767] aspect-video rounded-xl flex items-center justify-center">
                    <div class="text-[#112222] text-2xl font-bold">${repo.name.charAt(0).toUpperCase()}</div>
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                        <p class="text-white text-base font-medium leading-normal">${repo.name}</p>
                        <a href="${repo.html_url}" target="_blank" class="text-[#11e3e3] hover:text-white transition-colors">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                    <p class="text-[#92c9c9] text-sm font-normal leading-normal mb-3">
                        ${repo.description || 'No description available'}
                    </p>
                    <div class="flex items-center gap-2 text-xs text-[#92c9c9]">
                        ${repo.language ? `<span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-[#11e3e3]"></span>${repo.language}</span>` : ''}
                        <span class="flex items-center gap-1">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
                            </svg>
                            ${repo.stargazers_count}
                        </span>
                        <span class="flex items-center gap-1">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0z"/>
                            </svg>
                            ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function showProjectsError() {
        document.getElementById('projects-loading').style.display = 'none';
        document.getElementById('projects-error').style.display = 'block';
    }

    // Load GitHub projects on page load
    fetchGitHubProjects();

    // Resume functionality
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    const printResumeBtn = document.getElementById('print-resume-btn');
    const shareResumeBtn = document.getElementById('share-resume-btn');

    // Download resume functionality
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function() {
            // Open the resume HTML file in a new tab for download/print
            window.open('resume.html', '_blank');

            // Show download feedback
            const originalText = this.innerHTML;
            this.innerHTML = `
                <div class="text-[#112222]" data-icon="Check" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="m229.66,77.66-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                </div>
                <span class="truncate">Opening Resume!</span>
            `;

            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    }

    // Print resume functionality
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', function() {
            // Open the resume HTML file for printing
            const printWindow = window.open('resume.html', '_blank');
            printWindow.onload = function() {
                printWindow.print();
            };
        });
    }

    // Share resume functionality
    if (shareResumeBtn) {
        shareResumeBtn.addEventListener('click', function() {
            const resumeUrl = window.location.href + '#resume';

            if (navigator.share) {
                navigator.share({
                    title: 'Denil Anyonyi - Resume',
                    text: 'Check out my resume and portfolio',
                    url: resumeUrl
                }).catch(console.error);
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(resumeUrl).then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = `
                        <div data-icon="Check" data-size="16px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="m229.66,77.66-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                            </svg>
                        </div>
                        <span>Link Copied!</span>
                    `;

                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                }).catch(() => {
                    alert('Resume link: ' + resumeUrl);
                });
            }
        });
    }


});