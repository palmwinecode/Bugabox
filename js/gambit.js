$(document).ready(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyDtP3NqsOPzcXUUdOV1UJWAwlTTOSe9_ic",
        authDomain: "bugaboxxxx.firebaseapp.com",
        databaseURL: "https://bugaboxxxx-default-rtdb.firebaseio.com",
        projectId: "bugaboxxxx",
        storageBucket: "bugaboxxxx.appspot.com",
        messagingSenderId: "354665044468",
        appId: "1:354665044468:web:c8b6959acf0cb7eb3941a1"
      };
    
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var preloadSection = document.querySelector(".splash__screen")

    setTimeout(function() {
        classie.add( preloadSection, 'hide' );
    }, 4000 );

	var database = firebase.database();
	var inside;
	var outside;
	var current_inside;
	var reset;

	database.ref().on("value", function(snap){
        console.log(snap.val().PalmwineSwairi.In)
		inside = snap.val().PalmwineSwairi.In;
        $("#in__in-one, #in__in-two").text(inside.toString());
		outside = snap.val().PalmwineSwairi.Out;
        $("#out__out-one, #out__out-two").text(outside.toString());
		current_inside = snap.val().PalmwineSwairi.Inside;
        $("#total__in-one, #total__in-two").text(current_inside.toString());

		reset = snap.val().PalmwineSwairi.reset;
	});

    // $("#in__in-one #in__in-two").text(inside.toString());
    
    // $("#inn").click(function(){
    //     var iinside = snap.val().PalmwineSwairi.In;
    //     iinside = iinside + 1
    //     firebase.database().ref("PalmwineSwairi/In").set(inside);
    // })
    $("#inn").click(function(){
        var innside = firebase.database().ref().child("PalmwineSwairi/In");
        innside.once("value", function(snapshot){
            var data = Number(snapshot.val());
            data = data + 1;
            console.log(data)
            innside.set(data.toString());
            // reset = snap.val().PalmwineSwairi.reset;
        }
        )
    })

    $("#ouu").click(function(){
        var ooutside = firebase.database().ref().child("PalmwineSwairi/Out");
        ooutside.once("value", function(snapshot){
            var data = Number(snapshot.val());
            data = data + 1;
            console.log(data)
            ooutside.set(data.toString());
            // reset = snap.val().PalmwineSwairi.reset;
        }
        )
    })
    $("#current__in-one, #current__in-two").html(current_inside);

	$("").click(function(){
		var firebaseRef = firebase.database().ref().child("Led4Status");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
})