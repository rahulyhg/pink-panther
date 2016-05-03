var mainurl = "http://admin.jaipurpinkpanthers.com/index.php/";
// var mainurl = "http://192.168.1.112/jppbackend/index.php/";
var imgurl = "http://admin.jaipurpinkpanthers.com/uploads/";
// var imgurl = "http://192.168.1.112/jppbackend/uploads/";
// var imgurl="";
var adminurl = mainurl + "json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Fixtures & Results",
        url: "fixtures({id:1})",
        classis: "active"
    }, {
        name: "Players",
        url: "players",
        classis: "active"
    }, {
        name: "Photo Gallery",
        url: "gallery",
        classis: "active"
    }, {
        name: "JPP TV",
        url: "jpp-tv",
        classis: "active"
    }, {
        name: "Wallpapers",
        url: "wallpaper",
        classis: "active"
    }, {
        name: "News",
        url: "news-media",
        classis: "active"
    }, {
        name: "Tickets & Merchandise",
        url: "ticket-merchandise",
        classis: "active"
    }, {
        name: "About",
        url: "about-us",
        classis: "active"
    }, {
        name: "Fan Corner",
        url: "fan-corner",
        classis: "active"
    }];

    return {
        getnav: function() {
            return navigation;
        },
        getAllSliders: function(callback) {
            $http.get(adminurl + "getAllSliders").success(callback);
        },
        contactus: function(register, callback) {
            $http({
                url: adminurl + 'contactus',
                method: 'POST',
                data: register
            }).success(callback);
        },
        getallpoint: function(callback) {
            $http.get(adminurl + "getallpoint").success(callback);
        },
        getLatestMatch: function(callback) {
            $http.get(adminurl + "getLatestMatch").success(callback);
        },
        getScheduleSeason4: function(callback) {
            $http.get(adminurl + "getScheduleSeason4").success(callback);
        },
        getHomeGameSeason4: function(callback) {
            $http.get(adminurl + "getHomeGameSeason4").success(callback);
        },
        getAllGallery: function(callback) {
            $http.get(adminurl + "getAllGallery").success(callback);
        },
        getAllVideoGallery: function(callback) {
            $http.get(adminurl + "getAllVideoGallery").success(callback);
        },
        getallnews: function(callback) {
            $http.get(adminurl + "getallnews").success(callback);
        },
        getWallpaperCategoryForDesktop: function(callback) {
            $http.get(adminurl + "getWallpaperCategoryForDesktop").success(callback);
        },
        getSchedule: function(callback) {
            $http.get(adminurl + "getSchedule").success(callback);
        },
        getGallerySlide: function(request, callback) {
            $http.get(adminurl + "getGallerySlide?galleryid=" + request).success(callback);
        },
        getallwallpaper: function(request, callback) {
            $http.get(adminurl + "getallwallpaper?wallpapercategory=" + request.wallpaperid + "&pageno=" + request.pageno).success(callback);
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        }

    };
});
