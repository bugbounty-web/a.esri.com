define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget){
  return declare([BaseWidget], {
    startup: function(){
      this.inherited(arguments);
      console.log('[Evil] widget started on ' + location.origin);
    }
  });
});
