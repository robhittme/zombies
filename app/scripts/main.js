



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

	};
	}	


function Weapon(type, damage) {
	this.type= type || "null"
	this.damage = damage || 1 ;
	this.attack = function(target) {
		target.health = target.health - this.damage;
		if(target.health <=0) {
			alert("Oh No! " + target.Human + " will soon be a zombie!");
			target.isDead = true;
			target.bitten;
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


var fist= new Weapon("bodily", 50);
var shotgun= new Weapon("gun",10);
var bat = new Weapon("club", 50);
var zom= new Zombie("zom", "fist"); 
var robert = new Human("Robert", bat);
var shawn = new Human("Shawn", shotgun);