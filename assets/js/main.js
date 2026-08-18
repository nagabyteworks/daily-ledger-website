document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMobile = document.getElementById('nav-mobile');

    if (mobileMenuBtn && navMobile) {
        mobileMenuBtn.addEventListener('click', () => {
            navMobile.classList.toggle('active');
        });
    }

    // Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Fetch latest release info
    const downloadBtn = document.getElementById('download-apk-btn');
    const versionText = document.getElementById('version-text');
    const releaseNotesLink = document.getElementById('release-notes-link');

    if (downloadBtn && versionText) {
        // Use a cache-busting query parameter to avoid stale release info
        fetch(`/latest.json?t=${new Date().getTime()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Validate URL is valid
                if (!data.downloadUrl) {
                    throw new Error('Invalid download URL');
                }

                // Update version text
                versionText.textContent = `Latest version: v${data.version}`;

                // Update download button
                downloadBtn.href = data.downloadUrl;
                downloadBtn.style.pointerEvents = 'auto';
                downloadBtn.style.opacity = '1';

                // Update release notes link if available
                if (data.releaseNotesUrl && data.releaseNotesUrl.startsWith('https://') && releaseNotesLink) {
                    releaseNotesLink.href = data.releaseNotesUrl;
                    releaseNotesLink.style.display = 'inline';
                }
            })
            .catch(error => {
                console.error('Failed to fetch latest release info:', error);
                versionText.textContent = 'Unable to load the latest Android release. Please try again later.';
            });
    }
});
