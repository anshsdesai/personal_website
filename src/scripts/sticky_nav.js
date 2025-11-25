<script>
    function handleNavigationStickiness() {
        const nav = document.getElementById('main-navigation');
        const footer = document.getElementById('main-site-footer');

        if (!nav || !footer) return;

        const navHeight = nav.offsetHeight;
        const footerTop = footer.getBoundingClientRect().top;
        const viewportBottom = window.innerHeight;

        // Calculate the distance from the bottom of the viewport that the navigation should start to "unstick"
        // This is the distance from the bottom of the viewport to the top of the footer.
        const distanceToStop = viewportBottom - footerTop;

        // Check if the bottom of the navigation bar would collide with the footer (plus a small buffer)
        // The nav is currently fixed to bottom: 6 (which is about 1.5rem or 24px)
        const buffer = 24; 

        if (distanceToStop > (navHeight + buffer)) {
            // The footer is scrolling up and is now close to the nav.
            // Change position from fixed to absolute and position it relative to the document

            // 1. Remove fixed positioning classes
            nav.classList.remove('fixed', 'bottom-6');
            // 2. Add absolute positioning classes
            nav.classList.add('absolute', 'bottom-0');

            // Position it absolutely just above the footer
            nav.style.bottom = `${navHeight + buffer}px`; 

        } else {
            // The footer is far away, keep the navigation fixed to the bottom of the viewport

            // 1. Remove absolute positioning classes
            nav.classList.remove('absolute');
            nav.style.bottom = ''; // Clear inline style
            // 2. Add fixed positioning classes
            nav.classList.add('fixed', 'bottom-6');
        }
    }

    // Run the function on load and on scroll/resize
    window.addEventListener('scroll', handleNavigationStickiness);
    window.addEventListener('resize', handleNavigationStickiness);
    document.addEventListener('DOMContentLoaded', handleNavigationStickiness);
</script>