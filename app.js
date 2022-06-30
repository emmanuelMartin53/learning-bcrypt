// A partir d'un texte, bcrypt va transformer ce texte en chaine de caractère(string) :hash 

/// blabla => yçjr^é"u^"ur)^)"yràç":hash 

// salt (sel) : c'est quelque chose qui est rajouté a notre hash afin qu'il soit plus complexe.



(async () => {
    const bcrypt = require ('bcryptjs');
 
    try {
        let text = "okay"

        // let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(text, await bcrypt.genSalt(10));
        let hash2 = await bcrypt.hash(text, await bcrypt.genSalt(10));
        console.log(hash);
        console.log(hash2  );

        let compare = await bcrypt.compare(text, hash)
        let compare2 = await bcrypt.compare(text, hash2)
        console.log(compare); 
        console.log(compare2);        
    } catch (error) {
        console.log(error.message);  
    }  

}) () 
    

// la fonction .genSalt va répéter 10 fois un noueau de passe
// la fonction  .hash va transformer le text en mot de passe avec le salt ajouté