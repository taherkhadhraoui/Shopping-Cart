
 //   PRODUCT 1

 const plus=document.querySelector(".plus-button")
 const minus=document.querySelector(".minus-button")
 const price=Number(document.querySelector(".price").innerHTML)
 var qty=document.querySelector(".qty").value
 const total=document.querySelector(".total")
 const remove=document.querySelector(".remove")

 plus.addEventListener('click',function (){
       qty++
    document.querySelector(".qty").value=qty
    document.querySelector(".total").innerHTML=price*qty
    document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
 })

 minus.addEventListener('click',function (){
   if(document.querySelector(".qty").value>0){
     qty--
     document.querySelector(".qty").value=qty
     document.querySelector(".total").innerHTML=price*qty
     document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
   }
   
 })
 remove.addEventListener('click',function(){
   document.getElementById("1st").remove()
   document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
 })



 

//   PRODUCT 2

const plus2=document.querySelector(".plus-button2")
const minus2=document.querySelector(".minus-button2")
const price2=Number(document.querySelector(".price2").innerHTML)
var qty2=document.querySelector(".qty2").value
const total2=document.querySelector(".total2")
const remove2=document.querySelector(".remove2")

plus2.addEventListener('click',function (){
      qty2++
   document.querySelector(".qty2").value=qty2
   document.querySelector(".total2").innerHTML=price2*qty2
   document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
})

minus2.addEventListener('click',function (){
  if(document.querySelector(".qty2").value>0){
    qty2--
    document.querySelector(".qty2").value=qty2
    document.querySelector(".total2").innerHTML=price2*qty2
    document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
  }
  
})
remove2.addEventListener('click',function(){
  document.getElementById("2nd").remove()
  document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)-Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
})



//   PRODUCT 3

const plus3=document.querySelector(".plus-button3")
const minus3=document.querySelector(".minus-button3")
const price3=Number(document.querySelector(".price3").innerHTML)
var qty3=document.querySelector(".qty3").value
const total3=document.querySelector(".total3")
const remove3=document.querySelector(".remove3")

plus3.addEventListener('click',function (){
      qty3++
   document.querySelector(".qty3").value=qty3
   document.querySelector(".total3").innerHTML=price3*qty3
   document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
})

minus3.addEventListener('click',function (){
  if(document.querySelector(".qty3").value>0){
    qty3--
    document.querySelector(".qty3").value=qty3
    document.querySelector(".total3").innerHTML=price3*qty3
    
    document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)+Number(document.querySelector(".total3").innerHTML)
    console.log(document.querySelector(".text").innerHTML)
  }
  
})
remove3.addEventListener('click',function(){
    document.querySelector(".text").innerHTML=Number(document.querySelector(".total").innerHTML)+Number(document.querySelector(".total2").innerHTML)-Number(document.querySelector(".total3").innerHTML)+Number(document.querySelector(".total3").innerHTML)
    document.getElementById("3nd").remove()
})


//   Total PRODUCT 

var Total_Products=document.querySelector(".text").innerHTML

console.log(document.querySelector(".text").innerHTML)



//   heart LIKE 

  document.getElementById("heart1").addEventListener('click',function(){
    document.getElementById("heart1").setAttribute("class","f1 fa-heart")
    })
  

    document.getElementById("heart2").addEventListener('click',function(){
      document.getElementById("heart2").setAttribute("class","f2 fa-heart")
      })
      
      document.getElementById("heart3").addEventListener('click',function(){
        document.getElementById("heart3").setAttribute("class","f2 fa-heart")
        })
      