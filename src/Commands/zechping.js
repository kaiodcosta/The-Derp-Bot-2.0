exports.run = (client, message, args, ops) => {

    var z = "<:BestBuddie:230182852652826625>";
    var x = args;
    var i = 0;

	if(message.member.roles.some(r => ["Ultimate Supreme Owner", "Skynet Operator", "Tech Support", "Dev"].includes(r.name))){
		for (i=0;i<x;i++){
			
			message.channel.send(z + z + z + z +  "..." + z + z + z + "....." +z + z + z + "..." + z + "............" + z + "\n" +
			".................." + z + "...." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
			"............." + z + "........." + z + z + "....." + z + "....................." + z + z + z +z + "<@214488218802978816>" + "\n" + 
			"......." + z + "..............." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
			z + z + z + z + "..." + z + z + z + "....." + z + z + z + "..." + z + "............" + z + "\n" + ".")
			}
	} else if(x >= 6){
		message.channel.send("Command $zech is limited to 5!" + "\n" +
		z + z + z + z +  "..." + z + z + z + "....." +z + z + z + "..." + z + "............" + z + "\n" +
		".................." + z + "...." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		"............." + z + "........." + z + z + "....." + z + "....................." + z + z + z +z + "<@214488218802978816>" + "\n" + 
		"......." + z + "..............." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		z + z + z + z + "..." + z + z + z + "....." + z + z + z + "..." + z + "............" + z + "\n" + ".")

		
	} 
	else if (x < 6) {
		for (i=0;i<x;i++){
			
		message.channel.send(z + z + z + z +  "..." + z + z + z + "....." +z + z + z + "..." + z + "............" + z + "\n" +
		".................." + z + "...." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		"............." + z + "........." + z + z + "....." + z + "....................." + z + z + z +z + "<@214488218802978816>" + "\n" + 
		"......." + z + "..............." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		z + z + z + z + "..." + z + z + z + "....." + z + z + z + "..." + z + "............" + z + "\n" + ".")
		}
	} else {
		message.channel.send(z + z + z + z +  "..." + z + z + z + "....." +z + z + z + "..." + z + "............" + z + "\n" +
		".................." + z + "...." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		"............." + z + "........." + z + z + "....." + z + "....................." + z + z + z +z + "<@214488218802978816>" + "\n" + 
		"......." + z + "..............." + z + "..............." + z + ".................." + z + "............" + z + "\n" +
		z + z + z + z + "..." + z + z + z + "....." + z + z + z + "..." + z + "............" + z + "\n" + ".")
	}

}