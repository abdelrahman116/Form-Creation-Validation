function walkDog(){

        return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const dogwalked = true;
        if(dogwalked){
        resolve("You Walk the dog");
        }
        else{
            reject("You DIDN'T walk the dog!")
        }

        
    },1500);
});
}
function cleanKitchen(){
  
        return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const cleanKitchen = true;
        if(cleanKitchen){
        resolve("You clean the kitchen");
        }
        else{
            reject("You DIDN'T clean the kitchen");
        

        }

    },3500);
});
}
function talkOutTrash(){

        return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const talkTheTrash = false;
        if(talkTheTrash){
        resolve("You took out the trash");
        }
        else{
            reject("You DIDN'T take the trash out");
        }
        

    },500);
});
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return talkOutTrash()})
.then(value => {console.log(value); console.log("You Finished");})
.catch(error => console.error(error));

async function doChores(){
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const talkOutTrashResult = await talkOutTrash();
    console.log(talkOutTrashResult);

    console.log("You finished all the chores!");
}
catch(error){
    console.error(error);
}
doChores();