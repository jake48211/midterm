function distance(a,b,c,d){
      if(a==c && c==d){
        return 0;
      }

      else if(a!=c!=0 && b!=d!=0){
          var z= Math.abs(c-a);
          var x= Math.abs(d-b);
          return Math.sqrt(z*z+x*x);

    }
}
