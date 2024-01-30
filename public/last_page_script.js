function openVideo() {
    const container = document.getElementsByClassName('container')[0];
    const video = document.createElement('video');
    video.classList.add('video');
    video.setAttribute('controls', '');
    video.setAttribute('autoplay', '');
    const source = document.createElement('source');
    source.setAttribute('src', './images/in_this_moment_in_the_air_tonight.mp4');
    video.appendChild(source);
    container.appendChild(video);

    const button = document.getElementsByClassName('button')[0];
    container.removeChild(button);
}