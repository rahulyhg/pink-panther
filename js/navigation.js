var mainurl = "http://admin.jaipurpinkpanthers.com/index.php/";
// var mainurl = "http://192.168.0.101/jppbackend/index.php/";
var imgurl = "http://admin.jaipurpinkpanthers.com/uploads/";
// var imgurl = "http://192.168.1.107/jppbackend/uploads/";
// var imgurl="";
var adminurl = mainurl + "json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
            name: "Fixtures & Results",
            url: "fixtures({id:1})",
            classis: "active"
        }, {
            name: "Panther World",
            url: "fixtures({id:1})",
            classis: "active",
            subnav: [{
                name: "Wallpapers",
                url: "wallpaper",
                classis: "active"
            }, {
                name: "Gallery",
                url: "gallery",
                classis: "active"
            }, {
                name: "Games",
                link: "jpp-tv",
                classis: "active"
            }, {
                name: "JPP TV",
                url: "jpp-tv",
                classis: "active"
            }]
        }, {
            name: "Tickets",
            url: "ticket",
            classis: "active"
        }, {
            name: "Merchandise",
            url: "ticket-merchandise",
            classis: "active",
            highlighter: "high"
        }, {
            name: "Players",
            url: "players",
            classis: "active"
        },
        // {
        //     name: "Photo Gallery",
        //     url: "gallery",
        //     classis: "active"
        // },
        // {
        //     name: "JPP TV",
        //     url: "jpp-tv",
        //     classis: "active"
        // },
        // {
        //     name: "Wallpapers",
        //     url: "wallpaper",
        //     classis: "active"
        // },
        {
            name: "News",
            url: "news-media",
            classis: "active"
        }, {
            name: "About",
            url: "about-us",
            classis: "active"
        }, {
            name: "Fan Corner",
            url: "fan-corner",
            classis: "active"
        }
    ];

    return {
        getnav: function() {
            return navigation;
        },
        getAllSliders: function(callback) {
            $http.get(adminurl + "getAllSliders").then(callback);
        },
        contactus: function(register, callback) {
            $http({
                url: adminurl + 'contactus',
                method: 'POST',
                data: register
            }).success(callback);
        },
        submitFriends: function(frienddetail, callback) {
            $http({
                url: adminurl + 'submitClan',
                method: 'POST',
                data: frienddetail
            }).success(callback);
        },
        getallpoint: function(callback) {
            $http.get(adminurl + "getallpoint").then(callback);
        },
        getLatestMatch: function(callback) {
            $http.get(adminurl + "getLatestMatch").then(callback);
        },
        getScheduleSeason4: function(callback) {
            $http.get(adminurl + "getScheduleSeason4").then(callback);
        },
        getHomeGameSeason4: function(callback) {
            $http.get(adminurl + "getHomeGameSeason4").then(callback);
        },
        getAllGallery: function(callback) {
            $http.get(adminurl + "getAllGallery").then(callback);
        },
        getAllVideoGallery: function(callback) {
            $http.get(adminurl + "getAllVideoGallery").then(callback);
        },
        getallnews: function(callback) {
            $http.get(adminurl + "getallnews").then(callback);
        },
        getWallpaperCategoryForDesktop: function(callback) {
            $http.get(adminurl + "getWallpaperCategoryForDesktop").then(callback);
        },
        getSchedule: function(callback) {
            $http.get(adminurl + "getSchedule").then(callback);
        },
        getGallerySlide: function(request, callback) {
            $http.get(adminurl + "getGallerySlide?galleryid=" + request).then(callback);
        },
        getallwallpaper: function(request, callback) {
            $http.get(adminurl + "getallwallpaper?wallpapercategory=" + request.wallpaperid + "&pageno=" + request.pageno).success(callback);
        },
        getSlider: function(callback) {
            $http.get(adminurl + "getAllSliders").then(callback);
        },
         getjourney: function(callback) {
            $http.get(adminurl + "getjourney").success(callback);
        },
         getguesswho: function(callback) {
            $http.get(adminurl + "getguesswho").success(callback);
        },
         getcongratulation: function(callback) {
            $http.get(adminurl + "getcongratulation").success(callback);
        },
        submitSignup: function(formData, callback) {
          $http({
            url: adminurl + 'signup',
            method: 'POST',
            withCredentials: true,
            data: formData
          }).success(callback);
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
