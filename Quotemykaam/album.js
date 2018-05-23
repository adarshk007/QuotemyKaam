/*
@Global arrays to store Information
 my_url  : amazon url Links
 artist_thumbnail : pics of artist
*/

var my_url=[]
var artist_thumbnail=[]

/*
Accessing the API Via Test Function:
	>parsing the Json
	>run the loop
	>create new id
	>update Html
*/
function test(){
var api_s = new XMLHttpRequest();
api_s.open("GET", "https://rallycoding.herokuapp.com/api/music_albums", true);

api_s.onload = function() {

	var data = JSON.parse(this.response);
	var i=1;
	for(var j=0;j<5;j++)  // for unkown Value then we will use For each Fucntion for Loop
	{
	var beta=data[j];
  	if (api_s.status >= 200 && api_s.status < 400) 
  		{	
  			var id="1"+i;
  			var id_c=""+i;
  			document.getElementById(id_c).innerHTML = "<b>Song :  </b>"+beta.title;
  			document.getElementById(id).src=beta.image;
  			my_url[j]=beta.url;
  			artist_thumbnail[j]=beta.thumbnail_image;
 	 }
 	 i=i+1;
 	}
}; 
api_s.send();

}

/*

	::: Function and its Work ::: 

	Remove_val will remove buttons
	confirm_val will add confirmation button via update function
	Update_button :: will just add the new button

	get_confirmation :: will just add the link when user will press confirmation button. 

	(We can create the different JS Files for these Functionalities)
*/

function remove_val(id)
{
  var elem = document.getElementById(id);
  elem.parentNode.removeChild(elem);
  return false;
}

function confirm_val(id)
{
	var elem = document.getElementById(id);
	elem.parentNode.removeChild(elem);
	update_button(id);
	return false;
}
function update_button(id)
{	
	id=id+id[1];      // creating new id like b22,b33 (prev id b2 ---- new id b22)
	document.getElementById(id).className="btn btn-primary btn-block";
	document.getElementById(id).innerHTML="Confirm";
	document.getElementById(id).setAttribute( "onClick", "get_confirmation('"+id+"')");
	return;
}

/*

 as ids are created like this b22 , b33.
 So, for a particular link will use the last value of int(id[2])-1 as index

 */  
function get_confirmation(id)
{ 
	var index=parseInt(id[2])-1;  
	location.href=my_url[index];
}

test();
