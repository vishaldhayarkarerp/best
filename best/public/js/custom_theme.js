// Custom Theme JavaScript
frappe.ready(function() {
    // Add any additional theme customizations here
    console.log("Custom Light Blue Theme Loaded");
    
    // Add theme toggle functionality (optional)
    if (!document.getElementById('theme-toggle')) {
        let themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.innerHTML = '🎨';
        themeToggle.style.cssText = `
            position: fixed;
            top: 70px;
            right: 20px;
            z-index: 1000;
            background: #ADD8E6;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 16px;
        `;
        themeToggle.title = 'Toggle Light Blue Theme';
        document.body.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-blue-theme');
        });
    }
});