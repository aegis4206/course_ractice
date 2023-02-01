var admin = require('firebase-admin');
var serviceAccount = require('./fir-note-eb819-firebase-adminsdk-2s8ii-f1da00d178.json');
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
});
// var defaultProjectManagement = admin.projectManagement();
// console.log(defaultProjectManagement)

let db = admin.firestore();


async function getData(){
    db.collection('Note').get().then(data=>{
        data.forEach(item=>{
            console.log(item.data());
        });
    })
    .catch(err=>{
        console.log(err);
    });
}
// getData();

async function addData(){
    const res = await db.collection('Note').add({
        id:"4",
        note:"test",
        date: "5",
        time: "6"
    });
}

// addData();

async function updateData(){
    const updateData = db.collection('Note').doc('yKwGMtGW5qpxtkcIq9Z5');//輸入note裡的ID
    const res = await updateData.update({
        id:"99",
        node:"修改後",
    });
}

updateData()

async function delData(){
    let delData = db.collection('Note').doc('輸入note裡的ID');
    console.log(delData);
}