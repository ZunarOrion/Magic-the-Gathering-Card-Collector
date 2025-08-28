export function findCardBtn(element: HTMLButtonElement) {
    let card = 0
    const findCard = (count: number) => {
        card = count 
        element.innerHTML = `count is ${card}`
    }
    element.addEventListener('click', () => findCard(card + 1))
    findCard(0)
}














// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }