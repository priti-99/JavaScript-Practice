function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink==='coffee'){
            resolve('Order Placed')
        }
        else{
            reject('sorry, we only serve Coffee');
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed')
        resolve(`coffee served for the order ${order}`);
    })
}

// Scenerio with Promises ->

// placeOrder('coffee').then(function(orderFromCustomer){  // pass values from here
//     console.log('Request Received')
//     let orderIsProcessed = processOrder(orderFromCustomer)
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// });



// ** Async-await **->

async function serverOrder(){
    try{
        const orderReceived = await placeOrder('coffee');
        console.log(orderReceived);
        const processedOrder = await processOrder(orderReceived)
        console.log(processedOrder)
    }
    catch (error) {
        console.log(error)
    }
}

serverOrder()