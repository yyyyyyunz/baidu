//继承
function extend(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}

//餐厅类
function Restaurant(cash, staff, seats) {
	this.seats = seats;
	this.staff = staff;
	this.cash = cash;

	this.hire = function(Workman) {
		console.log(Workman.name + "被餐厅招聘了！");
		staff.push(Workman);

	}
	this.fire = function(Workman) {
		console.log(Workman.name + "被餐厅解雇了！");
		for(let i=0; i<staff.length; i++){
			if(staff[i].id === Workman.id) {
				staff[i] = null;
			}
		}
	}
}

//职员类
function Workman(name, id, payment) {
	this.name = name;
	this.id = id;
	this.payment = payment;
}

//服务员类
function Waiter(foods) {
	this.work = function() {
		if(Array.isArray(foods)){
			console.log("客人点菜：");
			for(let i=0; i<foods.length; i++){
				console.log(foods[i].name + ',');
			}
		}
	}
}

//服务员类继承职员类
extend(Waiter, Workman);

//厨师类
function Cooker(food) {
	this.work = function() {
		console.log("厨师完成" + food.name);
	}
}

//厨师类继承职员类
extend(Cooker, Workman);

//顾客类
function Customer() {
	this.eat = function() {
		console.log("顾客正在享用食物！");
	}
	this.order = function() {
		console.log("顾客需要点菜！");
	}
}

//菜品类
function food(name, cost, price) {
	this.name = name;
	this.cost = cost;
	this.price = price;
}



var ifeRestaurant = new Restaurant(1000000, 20,[]);
var foods = new food("s", 100, 1000);

var newCook = new Cooker(foods,"Tony", 1, 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
