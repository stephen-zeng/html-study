function User() {
    this.name = prompt("Name");
    this.age = prompt("Age");
    this.gender = prompt("Gender");
    this.grad = prompt("Graduate?")
    this.check = function() {
        if (+this.grad) console.log(this.name, "is graduate!");
    }
}
var users=[];
while (confirm("Add New?")) {
    var user = new User();
    users.push(user);
}
for (var i=0;i<users.length;i++) {
    console.log(users[i]);
    users[i].check();
}