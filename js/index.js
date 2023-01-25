var content = document.getElementById("content")
var date = document.getElementById("date")
var time = document.getElementById("time")
var addBtn = document.getElementById("addBtn")
var delBtn = document.getElementById("delBtn")

var listContent = []

function work (){
    var htmlStr = ""

    listContent.forEach(function(item){
        htmlStr = htmlStr + `
        <div class="item">
                <div>
                    <p>內容:${item.content}</p>
                    <p>時間:${item.date}${item.time}</p>
                </div>
            </div>
        ` 
        console.log(item)
    }    )
    list.innerHTML = htmlStr
    
}

addBtn.addEventListener("click",function(){
    listContent.unshift({
        content : content.value,
        date : date.value,
        time : time.value
    })
    work()
    content.value = ""
    date.value = ""
    time.value =""
})

delBtn.addEventListener('click',function(){
    listContent.shift()
    work()
}

)