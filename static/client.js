var root = document.body;


var AddWorkoutPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "Add workout form goes here")
          )}};

var AddAccountPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "Add account form goes here")
          )}};

var ViewWorkoutsPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "View workout page goes here")
          )}};

var HomePage = {view: homePageViewFunction};
// this is a vicious hack to take advantage of function hoisting
// the function that refers to this page is on bottom
// otherwise I get terrible circular reference problems.

var homeRoutes = {
  "home": HomePage,
  "add-account": AddAccountPage,
  "add-workout": AddWorkoutPage,
  "view-workouts": ViewWorkoutsPage
}



// home screen
var AddLift = {view: function(){
  return m("div", {class: "title is-child notification is-primary"}, m("a", {href: "#!add-workout"},"Add a Workout"))
}};

var AddAccount = {view: function(){
  return m("div", {class: "title is-child notification is-info"}, "Add Account")
}};

var ViewWorkouts = {view: function(){
  return m("div", {class: "title is-child notification is-link"}, "View Workouts")
}};

var HomeButton = {view: function(vnode){
  var route = "#!" + vnode.attrs.route;
  var nclass = "title is-child notification is-" + vnode.attrs.color;
  var label = vnode.attrs.label;
  return m("div", {class: nclass}, label)
}};

var NewMenuBox = {view: function(){
  return m("div", {class: "tile is-ancestor"},
          m("div", {class: "tile is-parent"}, [
            m(AddLift),
            m(AddAccount),
            m(ViewWorkouts)
          ]))}};

var MenuBox = {view: function(){
  return m("div", {class: "tile is-ancestor"},
          [
          m("div", {class: "tile is-parent"}, [
            m(AddLift),
            m(AddAccount),
            m(ViewWorkouts)
          ]),
//          m("div", {class: "tile is-parent"}, "bar")
           ])
}};



function homePageViewFunction(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, m(NewMenuBox))
          )}
//THIS HAS TO STAY AT BOTTOM TO HAVE ALL THE VARIABLES
// NEEDED FOR MENUBOX.  AND GETS HOISTED BECAUSE 
// ONE OF THOSE VARIABLES REFERS TO THIS FUNCTION.


m.route(root, "home", homeRoutes)

// https://she-said.glitch.me/#!home