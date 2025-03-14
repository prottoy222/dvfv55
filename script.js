let watchedAds = parseInt(localStorage.getItem("watchedAds") || 0);
let earnedPoints = parseFloat(localStorage.getItem("earnedPoints") || 0.00);

function updateProgressBar() {
    let progress = (watchedAds % 20) * 5;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

document.getElementById('watch-ad-btn').addEventListener('click', function () {
    showAds(3);
});

document.getElementById('watch-10-ads-btn').addEventListener('click', function () {
    showAds(10);
});

function showAds(count) {
    let adsShown = 0;
    function playAd() {
        if (adsShown < count && typeof show_9084977 === 'function') {
            show_9084977().then(() => {
                adsShown++;
                watchedAds++;
                earnedPoints += 0.1;
                localStorage.setItem('watchedAds', watchedAds);
                localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));
                document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
                updateProgressBar();
                playAd();
            }).catch(err => console.error("Ad failed to load", err));
        }
    }
    playAd();
}
