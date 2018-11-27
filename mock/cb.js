 $.ajax({
 	success:(res)=>{
 	$.ajax({
 	  success:(res)=>{
 	  	$.ajax({
 		success:(res)=>{
         		$.ajax({
 			success:(res)=>{
              
 			}
 		})
 		}
    })
 	 }
 })
}
 })


 
function geta (cb) {
	ajax({
	success:(res)=>{
       let url = res.data.url;
       //
       cb(url)

       //
	}
})
}
geta(geturl)

function geturl (argument) {
	ajax({
       	url:url,
       	success:(res)=>{
       	}
       })
}