function isPrimeNumber(num){
    if(num<2){
       return false;
    }
      var i =2;
      while(i<=num/2){
         if(num %i==0){
           return false;
         }
         i=i+1;
      }
       return true;
}
