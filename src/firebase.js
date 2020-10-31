import fbase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBoj6IIPkiozLs8V-SIVeKRWCFMwnATo1o",
    authDomain: "cipher-vue-shop.firebaseapp.com",
    databaseURL: "https://cipher-vue-shop.firebaseio.com",
    projectId: "cipher-vue-shop",
    storageBucket: "cipher-vue-shop.appspot.com",
    messagingSenderId: "298573887868",
    appId: "1:298573887868:web:fb45b4c5896767ec7e8cf9"
};

export const firebase =  fbase.initializeApp(firebaseConfig);