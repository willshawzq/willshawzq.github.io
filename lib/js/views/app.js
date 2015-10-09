define([
    "backbone",
    "text!template/minions.html"
],function(Backbone, minionsTemplate) {
    var AppView = Backbone.View.extend({
        el: "#homePage",
        events: {
            "click #funcList li": "showDetail"
        },
        minions: _.template(minionsTemplate),
        initialize: function() {
            this.$container = this.$el.find(".container")[0];
            this.$container.innerHTML = "initialize";
        },
        render: function() {
            this.$container.innerHTML = "render";
        },
        showDetail: function(ev) {
            var href = $(ev.target).data("href");
            this.$container.innerHTML = this[href]();
        }
    });
    return AppView;
});