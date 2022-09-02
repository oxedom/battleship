const ShipFactory = () => {

 
   let  x = undefined
   let  y = undefined
   let length = undefined
   let direction = undefined
  

  const getLength = () => {
    return length
  };


  const setLength = (lengthPara) => {
    if(0 < lengthPara < 6) 
    {
      length = lengthPara
    }
  
  }

  const checkValid = (x,y) => 
  {
    let answer = undefined
    //COLUMN = X 
    //ROW = Y 
    if(direction === 'row') 
    {
      if((length + y) > 11) { answer = false}
    }

    if(direction === 'column')
    {
      if((x + y) > 11)  { answer = false}
    }
    return answer
    }
   

  
  const setCords = (xPara,yPara,direction) => {


    if(length == 1  ) { x = xPara; y = yPara}



  }
 


return { checkValid, setLength}
}


module.exports = { ShipFactory };
