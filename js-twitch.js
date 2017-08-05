//GLOBAL VARIABLES
//Default Channels to look up
var following = ['RobotCaleb', 'OgamingSC2', 'ESL_SC2', 'minecraft', 'roblox'];
var url, html, channel_data;

$(document).ready(function () {

    //loop through default list
    for (var i = 0; i < following.length; i++) {
        url = "https://wind-bow.glitch.me/twitch-api/streams/";
        //passing the url and names build the url for the json data
        channel_data = getJSON(url, following[i]);   
    }

    
    function getJSON(url, name) {
        //get the json data from the web
        $.ajax({
            url: url + name,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                channel_data = data;
                //passing the name
                display_channels(name);
            },
            error: function (error) {
                //alert the error
                //alert(error);
            }
        });
    }

    function display_channels(name) {
        //Check your console to view data (TESTING)
        //console.log(channel_name);
        //console.log(channel_data);

        /*
          Add your code here to display.
          Look up 'javascript literal' to display your output
          You can use jquery to append to the channels-container
          Use '${variable}' to call variables like data.whatever
        */

        //HERE'S AN EXAMPLE OF LITERALS USING THE JSON DATA
        //Use this example and add 'if (the stream is null) then status is offline else add the data you want to display''
        html = `
         <p><b>${name}</b> status: ${channel_data.stream}.</p>
                `;

        //Appending the data to display
        $('#channels-container').append(html);
    }

});
