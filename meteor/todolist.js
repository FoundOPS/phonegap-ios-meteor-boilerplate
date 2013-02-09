Todos = new Meteor.Collection("todos");

if (Meteor.isClient) {
    Template.hello.greeting = function () {
        return "Welcome to TodoList!";
    };

    Template.hello.todos = function () {
        return Todos.find({});
    };

    Template.hello.events({
        'click input.inc' : function () {
            var input = document.getElementById("inputtext");
            if (input.value != "") {
                Todos.insert({item: input.value});
                input.value = "";
            }
        }, 'click input.clear' : function () {
            Todos.remove({});
        }
    });

    document.addEventListener("deviceready", function(){
       alert("Welcome to TodoList on " + device.platform);

        if(navigator.notification){
            navigator.notification.vibrate(1000);
        }

    }, false);
    
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
