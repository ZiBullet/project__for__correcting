const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const secondCount = 1000 
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
        itsPhoto.nextSibling.nextSibling.style.display = 'block'
        setTimeout(() => {
            itsPhoto.style.opacity = '1'
            itsPhoto.nextSibling.nextSibling.style.opacity = '1'
        }, 400);
        // itsPhoto.style.minWidth = '100%'
        unclicked.forEach(un => {
            un.style.transform = '18'
            un.style.color = 'rgba(0,0,0,.6)'
            un.style.fontWeight = '400'
            unnesPhoto.forEach(photo => {
                setTimeout(() => {
                    photo.style.display = 'none'
                    photo.nextSibling.nextSibling.style.display = 'none'
                }, 300);
                photo.style.opacity = '0'
                photo.nextSibling.nextSibling.style.opacity = '0'
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


// Getting the gender of person
const man = document.querySelector('.man')
const woman = document.querySelector('.woman')


// // Getting inputs about a person's fitness 
// const weight = document.querySelector('#weight')
// const height = document.querySelector('#height')
// const age = document.querySelector('#age')
// // Getting info about a person's activeness
// const actions = document.querySelectorAll('[data-active]')
// const low = document.querySelector('#low')
// const small = document.querySelector('#small')
// const medium = document.querySelector('#medium')
// const high = document.querySelector('#high')
// // Element where the result will appear
// const total = document.querySelector('.result')
// const averageManKal = (tallness, weight, age, action, result) => {
//     let BMR = 0
//     let att = ''
//     let unclicked = []
//     action.forEach(a => {
//         a.onclick = () => {
//             att = a.getAttribute('data-active')
//             switch (att) {
//                 case 'low':
//                     BMR *= 1.2
//                     a.classList.add('calculating__choose-item_active')
//                     unclicked = [small, medium, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'small':
//                     BMR *= 1.375
//                     a.classList.add('calculating__choose-item_active')
//                     unclicked = [low, medium, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'medium':
//                     BMR *= 1.55
//                     a.classList.add('calculating__choose-item_active')
//                     unclicked = [small, low, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'high':
//                     BMR *= 1.725
//                     a.classList.add('calculating__choose-item_active')
//                     unclicked = [small, medium, low]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
            
//                 default:
//                     break;
//             }
//         }
//         BMR = 88.36 + (13.4 * weight.value) + (4.8 * tallness.value) - (5.7 * age.value)
//         result.innerHTML = BMR
//     })
// }
// const averageWomanKal = (tallness, weight, age, action, result) => {
//     let BMR = 0
//     let unclicked = []
//     let att = ''
//     action.forEach(a => {
//         a.onclick = () => {
//             att = a.getAttribute('data-active')
//             console.log(att);
//             switch (att) {
//                 case 'low':
//                     BMR *= 1.2
//                     action.classList.add('calculating__choose-item_active')
//                     unclicked = [small, medium, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'small':
//                     BMR *= 1.375
//                     action.classList.add('calculating__choose-item_active')
//                     unclicked = [low, medium, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'medium':
//                     BMR *= 1.55
//                     action.classList.add('calculating__choose-item_active')
//                     unclicked = [small, low, high]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
//                 case 'high':
//                     BMR *= 1.725
//                     action.classList.add('calculating__choose-item_active')
//                     unclicked = [small, medium, low]
//                     unclicked.forEach(un => {
//                         un.classList.remove('calculating__choose-item_active')
//                     })
//                     break;
            
//                 default:
//                     break;
//             }
//         }
//         BMR = 447.6 + (9.2 * weight.value) + (3.1 * tallness.value) - (4.3 * age.value)
//         result.innerHTML = BMR
//     })
// }

man.onclick = () => {
    man.classList.add('calculating__choose-item_active')
    woman.classList.remove('calculating__choose-item_active')
    // averageManKal(height, weight, age, actions, total)
}
woman.onclick = () => {
    woman.classList.add('calculating__choose-item_active')
    man.classList.remove('calculating__choose-item_active')
}
