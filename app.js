
const btn=document.getElementById("btn").addEventListener("click",(e)=>{
    const inputs=document.getElementById("inputs").value;
    const container=document.getElementById("container");
    container.innerHTML="";
    const cdetail=document.getElementById("cdetail");
    cdetail.innerHTML="";
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputs}`)
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        if(!data.meals){
            const dvv=document.createElement("div");
            dvv.classList.add("edv");
            dvv.innerHTML=`
                <h4 class="edvt text-primary fw-bold text-wrap p-3">Sorry,Food item is not Available</h4>
            `;
            container.appendChild(dvv);

        }
        else{
            displaydata(data);
        }
    })
    .catch((err)=>{
        console.log(err);
    })

    
});

const displaydata=(foods)=>{
        const container=document.getElementById("container");
        // container.innerHTML="";
        // const cdetail=document.getElementById("cdetail");
        //  cdetail.innerHTML="";
        foods.meals.forEach(e => {
            const dv=document.createElement("div");
            dv.classList.add("detailc");
            dv.innerHTML=`
            
            <img src="${e.strMealThumb}" class="dg img-fluid rounded"</img>
            <h4 class="p-5 text-wrap text-primary">${e.strMeal}</h4>
            `;
            dv.addEventListener("click",(el)=>{
                showing(e);
                
            })
         
            container.appendChild(dv);
            
            
        });
    }



const showing=(food)=>{
    

                const cdetail=document.getElementById("cdetail");
                cdetail.innerHTML="";
                const dv=document.createElement("div");
                dv.classList.add("dt");
                let ingredient="";
                for(let i=1;i<21;i++){
                    const ing=food[`strIngredient${i}`];
                    if(ing && ing.trim()!=""){
                        ingredient+=`<li>${ing}</li>`
                    }
                }
                dv.innerHTML=`
                    <img src="${food.strMealThumb}" class="dg img-fluid rounded"</img>
                    <h4 class="p-5 text-wrap text-primary">${food.strMeal}</h4>
                    <h6>Ingredients:</h6>
                    <ul>${ingredient}</ul>
                `;
                cdetail.appendChild(dv);
                
          
}

