/**
 * 
 */
 
 /* 회원정보 조회 (비동기 통신) */
 document.getElementById("select1").addEventListener("click",function(){
 
 	const input = document.getElementById("in1");
 	const div = document.getElementById("result1");
 	
 	// Ajax 작성
 	$.ajax({
 		url : "member/selectOne",
 		data : {input : input.value},
 		type : "POST",
 		dataType : "JSON",
 		success : function(result){
 			console.log(result);
 			let resultStr = "회원번호 : " +result.userNo+"<br>"
									+ "이름 : " + result.userName +"<br>"
									+ "아이디 : " + result["userId"]+"<br>"
									+ "주소 : " + result["address"]+"<br>"
									
					$("#result1").html(resultStr);
 		},
 		error : function(request){
 			console.log("에러");
 			console.log("에러코드 : " + request.status);
 		}
 	})
 
 })
 
 /* 일정 시간 마다 회원 목록 조회*/
 function selectAll(){
 	$ajax({
 		url : "member/selectAll",
 		dataType : "json",
 		success : function(list){
 		
 			// list == js 배열
 			
 			const memberList = document.getElementById("memberList");
 			
 			memberList.innerHTML = "";
 			
 			// 반복문을 활용하여 데이터 추가
 			for(let item of list){
 			
 				const tr = document.createElement("tr");
 				
 				const td1 = document.createElement("td");
 				td1.innerText = item.userNo; // 회원번호
 				
 				const td2 = document.createElement("td");
 				td2.innerText = item.userId; // 회원아이디
 				
 				const td3 = document.createElement("td");
 				td3.innerText = item.nickName; // 회원닉네임
 				
 				tr.append(td1, td2, td3);
 				
 				memberList.append(tr);
 			}
 		},
 		error : function(request){
 			console.log("에러");
 			console.log("에러코드 : " + request.status);
 		}
 	})
 }
 
 selectAll(); // 함수호출
 
 window.setInterval(selectAll, 10000);