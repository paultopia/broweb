var root = document.body;

// home screen
var AddLift = {view: function(){
  return m("div", {class: "title is-child notification is-primary"}, m("a", {href: "#!add-workout"},"Add a Workout"))
}}

var AddAccount = {view: function(){
  return m("div", {class: "title is-child notification is-info"}, "Add Account")
}}

var ViewWorkouts = {view: function(){
  return m("div", {class: "title is-child notification is-link"}, "View Workouts")
}}

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
}}

var HomePage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, m(MenuBox))
          )}}


var AddWorkoutPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "Add workout form goes here")
          )}}

var AddAccountPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "Add account form goes here")
          )}}

var ViewWorkoutsPage = {view: function(){
  return m("section", {class: "section"},
           m("div", {class: "container"}, "View workout page goes here")
          )}}


m.route(root, "home", {
  "home": HomePage,
  "add-account": AddAccountPage,
  "add-workout": AddWorkoutPage,
  "view-workouts": ViewWorkoutsPage
})

// https://she-said.glitch.me/#!home