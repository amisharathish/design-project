// Wait for the HTML elements to fully load on the page
document.addEventListener("DOMContentLoaded", () => {
    
    // Define what text changes on the right-side sticky panel for each scroll step
    const stepContent = {
        "1": {
            icon: "📈",
            title: "Chart 1: Urban Expansion Curve",
            desc: "Visualizing the 10-year spike in commercial and residential density loading across the metropolitan sectors."
        },
        "2": {
            icon: "🏗️",
            title: "Chart 2: The Structural Loophole",
            desc: "A direct comparison of legally sanctioned structural floors versus the actual illegal vertical extensions built on-site."
        },
        "3": {
            icon: "🚨",
            title: "Chart 3: Inside the Fire Trap",
            desc: "Mapping the exact physical floor space layouts where massive room subdivisions trap residents during emergency crises."
        }
    };

    // Grab the placeholder elements from the right side of our HTML
    const chartIcon = document.getElementById("chart-placeholder");
    const chartTitle = document.getElementById("chart-title");
    const chartDesc = document.getElementById("chart-desc");

    // Configure the screen observer settings
    const observerOptions = {
        root: null,                 // Measures relative to your screen's viewpoint
        rootMargin: "-40% 0px -40% 0px", // Triggers when a text step hits the middle 20% of your screen
        threshold: 0
    };

    // Create the logic loop that watches the scroll progress
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Only trigger a change when a section enters the middle focal area
            if (entry.isIntersecting) {
                const stepId = entry.target.getAttribute("data-step");
                
                // Pull the matching text content for this active step
                const activeData = stepContent[stepId];
                
                if (activeData) {
                    // Update the sticky right-hand container elements dynamically
                    chartIcon.textContent = activeData.icon;
                    chartTitle.textContent = activeData.title;
                    chartDesc.textContent = activeData.desc;
                    
                    // console.log() helps us debug in the browser inspect tool!
                    console.log(`Successfully transitioned to Step ${stepId}`);
                }
            }
        });
    }, observerOptions);

    // Tell the observer to start tracking all cards with the 'scroll-step' class
    const steps = document.querySelectorAll(".scroll-step");
    steps.forEach(step => scrollObserver.observe(step));
});