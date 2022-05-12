require([
 'splunkjs/mvc',
 'splunkjs/mvc/utils',
 'jquery',
 'underscore',
],
    function(mvc,utils,$,_){
    'use strict';
    var service = mvc.createService();
    console.log("Setup Running");
    // Calling to change is_configuration to 1
    service.post("/servicesNS/nobody/TA-UserWatchlist/properties/app/install", {"is_configured": "1"}, function(err, response){
        if (err){
            console.log("Failed to Update is_configured.")
            console.log(err)
        }else{
            console.log("Successfully Updated is_configured. ")
            console.log(response)
        }
        });
    //Macros :: user_watchlist_index
    service.post("/servicesNS/nobody/TA-UserWatchlist/configs/conf-macros/user_watchlist_index", {"disabled": "0"}, function(err, response){
        if (err){
            console.log("Failed to Update user_watchlist_index.")
            console.log(err)
        }else{
            console.log("Successfully Updated user_watchlist_index.")
            console.log(response)
        }
        });
    //Macros
    service.post("/servicesNS/nobody/TA-UserWatchlist/configs/conf-macros/user_watchlist_sourcetype", {"disabled": "0"}, function(err, response){
        if (err){
            console.log("Failed to Update user_watchlist_sourcetype.")
            console.log(err)
        }else{
            console.log("Successfully Updated user_watchlist_sourcetype.")
            console.log(response)
        }
        });
        //Reload the app so the user doesn't get stuck in a configuration loop that requires a restart
    service.post("/servicesNS/nobody/system/apps/local/_reload", {}, function(err, response){
        if (err){
            console.log("Failed to fix bug the app.")
            console.log(err)
        }else{
            console.log("Successfully fix bug the app.")
            console.log(response)
        }
        });
});

