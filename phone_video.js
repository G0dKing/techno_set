document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');

    function enterFullscreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }

    function handleOrientationChange() {
        if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    }

    window.addEventListener('orientationchange', handleOrientationChange);
});
