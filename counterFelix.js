export function setupCounterFelix(element){
    let counter = 0;

    const setCounter = (count) => {
        counter = count
        element.innerHTML = `Felix hizo un cambio count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
}