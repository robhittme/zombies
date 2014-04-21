
function Human(name, weapon) {
	this.name = name;
	this.isZombie = false;
	this.isDead = false;
	this.health = 100;
	this.weapon = weapon;
}

Human.prototype.bitten = function() {
		this.isZombie = true;
		this.killSelf = function() {
			this.isDead= true;
		};
		this.health=100;
	};

function ZombieShit(type, damage) {
	this.type= type;
	this.damage = damage;
}
ZombieShit.prototype.attack = function(target) {
	target.health = target.health - this.damage;
	if(target.health <=0) {
		alert("Oh No! " + target.name + " will soon be a zombie!");
		target.isZombie = true;
		target.name = "Zombie";
		target.health = 100;
		}
	};

function Weapon(damage) {
	// this.type= type || "null";
	this.damage= damage || 1;
	
}
Weapon.prototype.attack = function(target) {
	target.health = target.health - this.damage;
	if(target.health <=0) {
		alert(target.name + " is dead!");
		target.isDead = true;
		}
	};

function Zombie(name, weapon) {
	this.name = name;
	this.isZombie = true;
	this.isDead = false;
	this.health = 100;
	this.weapon = weapon;
}
Zombie.prototype.bite = function(human) {
		human.bitten();
	};



// var fist= new ZombieShit("bodily", 10);
// var pistol = new Weapon("gun",20);
// var shotgun= new Weapon("gun",30);
// var bat = new Weapon("club", 15);
// var zom= new Zombie("zom", fist); 
// var robert = new Human("Robert", pistol);
// var shawn = new Human("Shawn", shotgun);
// var brooke = new Human("Brooke",bat);
// var john = new Human ("john", bat);


