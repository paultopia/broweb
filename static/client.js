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

// HOME PAGE

var HomeButton = {view: function(vnode){
  var route = "#!" + vnode.attrs.route;
  var nclass = "title is-child notification is-" + vnode.attrs.color;
  var label = vnode.attrs.label;
  return m("div", {class: nclass}, m("a", {href: route}, label))
}};

var MenuBox = {view: function(){
  return m("div", {class: "tile is-ancestor"},
          m("div", {class: "tile is-parent"}, [
            m(HomeButton, {route: "add-workout", color: "primary", label: "Add a Workout"}),
            m(HomeButton, {route: "add-account", color: "info", label: "Add Account"}),
            m(HomeButton, {route: "view-workouts", color: "link", label: "View Workouts"})
          ]))}};

var HomePage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, m(MenuBox))
          )}};

m.route(root, "home", {
  "home": HomePage,
  "add-account": AddAccountPage,
  "add-workout": AddWorkoutPage,
  "view-workouts": ViewWorkoutsPage
})