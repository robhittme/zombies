

 	$(".largeOne").click(function(e){
 		e.preventDefault();
 		console.log("im working");
 		var character = $(".characterSelect").val();
 		var varName = character;
 		var weapon = $(".weaponSelect").val();
 		var varWeapon = weapon;
 	$(".player").append("<li>" + "Name:"+ character +"<br>"+ "Weapon of Choice:" + weapon);
 		console.log("its working"); 
 			if(weapon === "bat") {
 				var userWeapon = new Weapon(15);
 			}
 			if(weapon === "shotgun") {
 				var userWeapon = new Weapon(30);
 			}
 			if(weapon === "pistol") {
 				var userWeapon = new Weapon(20);
 			}
 			varName = new Human(character, userWeapon);
 			console.log(varName);

 			$(".player").append("<a class=\"btn btn-danger btn-sml " + varName.name + "\">ATTACK </a>");
 			$("." + varName.name).click(function() {
 				console.log(varName);
 				console.log("this one is working");
 				varName.weapon.attack(zombie);
 				zombie.weapon.attack(varName);
 			 $(".health").text(varName.name+":" + varName.health);
 			 $(".zomhealth").text(zombie.name+":" + zombie.health);
 			 		if(varName.isZombie === true) {
 			 			$(".player img").fadeIn("fast").addClass("show");
 			}
 					if(zombie.isDead === true) {
 						$(".second img").fadeIn("fast").addClass("show");
 					}
 		});
 		});
    

 





