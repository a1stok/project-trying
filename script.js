let numberOfFilms;
function start(){
     numberOfFilms = +prompt("how many movies have you watched?","");

     while(numberOfFilms =="" || numberOfFilms==null || isNaN(numberOfFilms)){
     numberOfFilms = +prompt("how many movies have you watched?","");}
     }
     start();



const personalMovieDB = {




     count : numberOfFilms,
     movies : {

    },
     actors : {

    },
     genres : [ ],
     privat : false
}    
function remembermyFilms() {
     for (let i=0;i<2;i++){
          const a = prompt("One of the last seen movies?"," ");
          const b = +prompt("how would you rate it?"," ");
     if (a != null && b != null && a!="" & b !=""&& a.length<50){
          personalMovieDB.movies[a]=b; 
          console.log("Done");}
     else {
          console.log("error");
          i--;
     }
}
}
remembermyFilms();

function detectPersonalLevel(){
     if(personalMovieDB.count<10){
          console.log("You have not seen much films");
     }
     else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
     console.log("you are a good viewer");}
     else if(personalMovieDB.count>=30){
          console.log("you are a cinephile ");}
     else{
          console.log("error occured");}
     
     
}
function showMyDB(hidden){
     if(!hidden){
          console.log(personalMovieDB);
     }
}
showMyDB(personalMovieDB.privat);


 function writeYourGenres(){
     for(let  i=1;i<=3;i++){
          a=prompt(`What is your num ${i}genre?`,"");
          if(a.length<5||a===""||a==null){
               console.log("That`s invalid genre!");
               i--;
          }
          else{
          personalMovieDB.genres[i-1]=a;}


     }
 }
 writeYourGenres();
