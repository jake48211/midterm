function isLeapYear (Year) {

if (Year % 4==0 && Year % 100!=0) {
      return true;
   }
    else if(Year%4==0 && Year%100==0 && Year%400!=0){
       return false;
    }
  else if(Year%4==0 && Year%400==0){
       return true;
  }
    else
    {
         return false;
    }

}
