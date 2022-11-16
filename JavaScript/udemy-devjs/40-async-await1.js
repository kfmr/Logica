function waitFor(time = 10000) {
    return new Promise((resolve, reject) => {
        setInterval(() => resolve(), time)
    })
}

waitFor().then((res => console.log(res)))