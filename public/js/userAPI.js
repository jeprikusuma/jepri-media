const search = document.querySelector("#search"),
      posting = document.querySelector("#posting"),
      postingStatus = document.querySelector("#posting-status"),
      trending = document.querySelectorAll(".trending");

let status = document.querySelector("#status"),
    discover = document.querySelector("#discover"),
    delate = document.querySelector("#costumLink"),
    valueComment = document.querySelector("#comment-value");

const url = "http://localhost/jepri-media/public/Home/";

const reloadHastag = () =>{
    let hastags = document .querySelectorAll(".hastag");
    if(hastags != null){
        hastags.forEach(hastag => {
            hastag.addEventListener("click",(e) => {
                e.preventDefault();

                fetch(e.target.href, { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json; charset=utf-8"},
                    body: JSON.stringify({"hastag" : true})
                })
                .then(response => response.text())
                .then(data => {
                    status.innerHTML = data;
                    reloadHastag();
                });
            })
        });  
  }
}

if(posting != null){
    posting.addEventListener('submit', (e) =>{
        e.preventDefault();
    
        if(postingStatus.value != ""){
            fetch(url + "posting", { 
                method: "POST", 
                headers: { "Content-Type": "application/json; charset=utf-8"},
                body: JSON.stringify({
                    "content": postingStatus.value,
                    "posting": true
                })
            })
            .then(response => response.text())
            .then(data => {
                postingStatus.value = "";
                discover.innerHTML = data;
                reloadHastag();
            });
        }
    })
    
    delate.addEventListener("click", (e) =>{
        e.preventDefault();
        
        fetch(e.target.href, { 
            method: "POST", 
            headers: { "Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({
                "delete": true
            })
        })
        .then(response => response.text())
        .then(data => {
            status = document.querySelector("#status");
            status.innerHTML = data;
            delate = document.querySelector("#costumLink");
            reloadHastag();
            $('#costum-modal').modal('hide');
        });
    })

    if(trending != null){
        trending.forEach(trend => {
            trend.addEventListener("click",(e) => {
                e.preventDefault();

                fetch(e.target.href, { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json; charset=utf-8"},
                    body: JSON.stringify({"hastag" : true})
                })
                .then(response => response.text())
                .then(data => {
                    status.innerHTML = data;
                    reloadHastag();
                });
            })
        })
    }

    reloadHastag();
}

const searchClick = () =>{
    if(status != null){
        fetch(url + "search/" + search.value, { 
            method: "POST", 
            headers: { "Content-Type": "application/json; charset=utf-8"},
            body: JSON.stringify({"status" : true})
        })
        .then(response => response.text())
        .then(data => {
            status.innerHTML = data;
            
        });
    }

}

const publicClick = () => {
    fetch(url + "search", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "nav": "public"
        })
    })
   .then(response => response.text())
   .then(data => {
       discover.innerHTML = data
       status = document.querySelector("#status");
       reloadHastag();
    });
}

const myClick = () => {
    fetch(url + "mypost", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "nav": "my"
        })
    })
   .then(response => response.text())
   .then(data => {
       discover.innerHTML = data;
       reloadHastag();
    });
}

const like = (post)=>{
    fetch(url + "like", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "like": post
        })
    })
   .then(response => response.text())
   .then(data => {
       document.querySelector('.more'+post).innerHTML = data;
    });
}

const unlike = (post)=>{
    fetch(url + "unlike", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "like": post
        })
    })
   .then(response => response.text())
   .then(data => {
         document.querySelector('.more'+post).innerHTML = data;
    });
}

const toComment = (post)=>{
    fetch(url + "commentArea", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "post": post
        })
    })
   .then(response => response.text())
   .then(data => {
        status.innerHTML = data
        status = document.querySelector("#status");
        valueComment = document.querySelector("#comment-value");
    });
}

const commentPost = (post) =>{
    fetch(url + "commentPost", { 
        method: "POST", 
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            "status" : true,
            "post": post,
            "comment": valueComment.value
        })
    })
   .then(response => response.text())
   .then(data => {
        status.innerHTML = data
        status = document.querySelector("#status");
        valueComment = document.querySelector("#comment-value");
        valueComment.value ="";
    });
}