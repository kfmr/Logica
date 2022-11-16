let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
});

promise.then((res) => console.log("Fim da execucao"))
// promise.catch(alert)