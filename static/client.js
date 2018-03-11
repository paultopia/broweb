
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
           m("div", {class: "container"}, m(MenuBox))
          )}


m.route(root, "home", homeRoutes)

// https://she-said.glitch.me/#!home