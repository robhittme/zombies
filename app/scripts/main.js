



function Human(name, weapon) {
	this.name = name;
	this.isZombie = false;
	this.isDead = false;
	this.health = 100;
	this.weapon = weapon;
	this.bitten = function() {
		this.isZombie = true;
		this.killSelf = function() {
			this.isDead= true;

		}
		this.health=100;

	};
	}	

function ZombieShit(type, damage) {
	this.type= type;
	this.damage = damage;
	this.attack = function(target) {
		target.health = target.health - this.damage;
		if(target.health <=0) {
			alert("Oh No! " + target.name + " will soon be a zombie!");
			target.isZombie = true;
			target.health = 100;
		}
	}
}
function Weapon(type, damage) {
	this.type= type || "null"
	this.damage = damage || 1 ;
	this.attack = function(target) {
		target.health = target.health - this.damage;
		if(target.health <=0) {
			alert("Oh No! " + target.name + " will soon be dead!");
			target.isDead = true;
		}
	}
}
function Zombie(name, weapon) {
	this.isZombie = true;
	this.isDead = false;
	this.health = 100;
	this.weapon = weapon;
	this.bite = function(human) {
		human.bitten();
	};

}

var fist= new ZombieShit("bodily", 10);
var shotgun= new Weapon("gun",30);
var bat = new Weapon("club", 15);
var zom= new Zombie("zom", fist); 
var robert = new Human("Robert", bat);
var shawn = new Human("Shawn", shotgun);
var brooke = new Human("Brooke",bat);

