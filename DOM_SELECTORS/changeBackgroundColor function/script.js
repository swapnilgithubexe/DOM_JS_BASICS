function changeBackgroundColor(selector) {
    //Implement your function here
    const element = document.querySelectorAll(selector);
    element.forEach((item) => {
        item.style.backgroundColor = "yellow";
    })
}
