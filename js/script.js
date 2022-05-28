const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const secondCount = 100
const minuteCount = secondCount * 60
const hourCount = minuteCount * 60
const dayCount = hourCount * 24
const coutDown = (day, hour, minute, second) => {
    setInterval(() => {
        second.innerHTML--
        if (second.innerHTML <= 0) {
            second.innerHTML = 59
            minute.innerHTML--
            if (minute.innerHTML <= 0) {
                minute.innerHTML = 59
                hour.innerHTML--
                if (hour.innerHTML <= 0) {
                    hour.innerHTML = 23
                    day.innerHTML--
                    if (day.innerHTML <= 0) {
                        second.innerHTML = 0
                        minute.innerHTML = 0
                        hour.innerHTML = 0
                        day.innerHTML = 0
                        clearInterval()
                    }
                }
            }
        }
    }, secondCount)
}
coutDown(days, hours, minutes, seconds)

const changePhoto = (clickedText, itsPhoto, unclicked = [], unnesPhoto = []) => {
    clickedText.onclick = () => {
        // clickedText.style.transform = 'scale(2, 2)'
        clickedText.style.fontWeight = 'bold'
        clickedText.style.fontSize = '22'
        clickedText.style.color = 'black'
        itsPhoto.style.display = 'block'
        itsPhoto.style.opacity = '1'
        
        // itsPhoto.style.minWidth = '100%'
        unclicked.forEach(un => {
            un.style.transform = '18'
            un.style.color = 'rgba(0,0,0,.6)'
            un.style.fontWeight = '400'
            unnesPhoto.forEach(photo => {
                photo.style.display = 'none'
                photo.style.opacity = '0'
            })
        });
    }
}
// Photos
const fitPhoto = document.querySelector('#fit')
const elitePhoto = document.querySelector('#elite')
const postPhoto = document.querySelector('#post')
const balPhoto = document.querySelector('#bal')
// text (link) for photos
const fitText = document.querySelector('.fitText')
const eliteText = document.querySelector('.eliteText')
const postText = document.querySelector('.postText')
const balText = document.querySelector('.balText')

fitText.onclick = () => {
    changePhoto(fitText, fitPhoto, unclicked = [eliteText, postText, balText], unnesPhoto = [elitePhoto, postPhoto, balPhoto])
}
eliteText.onclick = () => {
    changePhoto(eliteText, elitePhoto, unclicked = [fitText, postText, balText], unnesPhoto = [fitPhoto, postPhoto, balPhoto])
}
postText.onclick = () => {
    changePhoto(postText, postPhoto, unclicked = [eliteText, fitText, balText], unnesPhoto = [elitePhoto, fitPhoto, balPhoto])
}
balText.onclick = () => {
    changePhoto(balText, balPhoto, unclicked = [eliteText, postText, fitText], unnesPhoto = [elitePhoto, postPhoto, fitPhoto])
}