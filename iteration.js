 for(let i = 0; i < 10; i++) {
    //console.log(i)
 }

 
let names = ['per', 'oskar', 'karl']

 for (let index = 0; index < names.length; index++) {
    //const element = names[index];
      // console.log(element);
      console.log(names[index]);
    }

 names.forEach((name, index) => {
    console.log(name, index);
    
 });

 let rolls = [];

 for (let i = 0; i < 10; i++) {
    const roll = Math.ceil (Math.random()*6) + 1;
    

    rolls.push(roll);
    console.log(rolls)
   
    }

 
