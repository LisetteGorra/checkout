 checkOut: function() {
               if( this.roomNumbersBooked.length>0) {
                   this.roomNumbersBooked.pop()
                   console.log(this.roomNumbersBooked)
               }
               else{
                   console.log("No rooms picked")
               }
