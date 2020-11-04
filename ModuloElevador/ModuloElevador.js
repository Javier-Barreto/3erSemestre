var elevador = (function(){
  //Variable que guarda el piso donde se encuentra, el piso 0 en teoria es planta baja, es decir mi primer piso
  var privatePActual = 0;

  //0 es puerta cerrada y 1 es puerta abierta
  var privateStateDoor = 0;

  /*function ActualFloor(){
    return privatePActual;
  }*/

  function OpenDoor (){
    privateStateDoor=1;
    return "Puerta abierta";
  }

  function CloseDoor(){
    privateStateDoor=0;
    return "Puerta cerrada";
  }

  function PrivateUpFloor(){
    if(privatePActual==7)
    {
      return "Ya no se puede subir más";
    }
    else{
      if(privateStateDoor==1)
      {
        console.log(CloseDoor());
      }

      console.log(OpenDoor());
      privatePActual++;
      console.log("Hemos llegado al piso " + privatePActual);
    }
  }

  function PrivateDownFloor(){
    if(privatePActual==0)
    {
      return "Ya no se puede bajar más";
    }
    else{
      if(privateStateDoor==1)
      {
        console.log(CloseDoor());
      }

      console.log(OpenDoor());
      privatePActual--;
      return "Hemos llegado al piso " + privatePActual;
    }
  }

  function GoToFloor(n){
    if(n>=0&&n<8)
    {
      if(privatePActual==n)
      {
        return "Usted ya se encuentra en el piso " + privatePActual;
      }
      else
      {
        if(privatePActual>n)
        {
          if(privateStateDoor==1)
          {
            console.log(CloseDoor());
          }
          do
          {
            privatePActual--;
            console.log(privatePActual);
          }while(privatePActual!=n);
        }
        else
        {
          if(privatePActual<n)
          {
            if(privateStateDoor==1)
            {
              console.log(CloseDoor());
            }
            do
            {
              privatePActual++;
              console.log(privatePActual);
            }while(privatePActual!=n);
          }
        }
        return "Hemos llegado al piso " + privatePActual + ", ya pueden bajar.";
      }
    }
    else{
      return "Este elevador nomas tiene 8 pisos y planta baja, ingrese un número entre el 0 y el 7";
    }
  }

  return{
    AbrirPuerta:OpenDoor,
    CerrarPuerta:CloseDoor,
    IrAPiso:GoToFloor,
    Subir1Piso:PrivateUpFloor,
    Bajar1Piso:PrivateDownFloor/*,
    PisoActual:ActualFloor*/
  }
})();
