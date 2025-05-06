const fetchApi= async(url)=>{
      try {
            const response =  await fetch(url);
            if(!response.ok){
                  throw new Error("Fadlan xogtaad dalbatay ma jirto")
            }
            const data = await response.json();
            console.table(data)
      } catch (error) {
            console.log("fadlan server ka hubi in uu run garaysan yahay")
      }
};

fetchApi("https://jsonplaceholder.typicode.com/users/")
