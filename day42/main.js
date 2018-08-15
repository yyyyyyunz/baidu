//继承
function extend(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
}

//餐厅类
function Restaurant(obj) {
	this.seats = obj.seats;
	this.staff = obj.staff;
	this.cash = obj.cash;

	this.hire = function(Workman) {
		console.log(Workman.name + "被餐厅招聘了！");
		this.staff.push(Workman);

	}
	this.fire = function(Workman) {
		console.log(Workman.name + "被餐厅解雇了！");
		var num = this.staff.indexOf(Workman);
		this.staff.splice(num, 1);
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
	Workman.apply(this, arguments);
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
//extend(Waiter, Workman);

//厨师类
function Cooker(food) {
	Workman.apply(this, arguments);
	this.work = function() {
		console.log("厨师完成" + food.name);
	}
}

//厨师类继承职员类
//extend(Cooker, Workman);

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



var ifeRestaurant = new Restaurant({
	cash : 100000,
	staff : [],
	seats : 20

});
var foods = new food("鱼香肉丝", 100, 1000);

var newCook = new Cooker('Tony', 1, 10000, foods);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
