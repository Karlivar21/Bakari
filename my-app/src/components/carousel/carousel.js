export const NextTransition= () => {
    let active_img = document.getElementById('active-img');
    let right_hidden = document.getElementById('side-img-right-hidden-container');
    let right = document.getElementById('side-img-right-container');
    let left = document.getElementById('side-img-left-container');

    right_hidden.classList.add('right-hidden-slide-left');
    right.classList.add('right-slide-forward');
    active_img.classList.add('active-slide-back-left');
    left.classList.add('left-slide-left');

    setTimeout(() => {
        right_hidden.classList.remove('right-hidden-slide-left');
        right.classList.remove('right-slide-forward');
        active_img.classList.remove('active-slide-back-left');
        left.classList.remove('left-slide-left');
    },1000);
}

export const PreviousTransition = () => {
    let left_hidden = document.getElementById('side-img-left-hidden-container');
    let left = document.getElementById('side-img-left-container');
    let active_img = document.getElementById('active-img');
    let right = document.getElementById('side-img-right-container');
    
    left_hidden.classList.add('left-hidden-appear');
    left.classList.add('left-slide-front');
    active_img.classList.add('active-slide-back-right');
    right.classList.add('right-slide-right');
    setTimeout(() => {
        left_hidden.classList.remove('left-hidden-appear');
        left.classList.remove('left-slide-front');
        active_img.classList.remove('active-slide-back-right');
        right.classList.remove('right-slide-right');
    },1000);
}
