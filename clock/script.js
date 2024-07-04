const updateTime=()=>
{
    let currentDate=new Date()
    let s=currentDate.getSeconds()
    let m=currentDate.getMinutes()
    let h=currentDate.getHours()
    document.getElementById("seconds").innerText=s
    document.getElementById("minutes").innerText=m+":"
    document.getElementById("hours").innerText=h+":"
}

let stopIsOn=false
let time=setInterval(updateTime,1000)
let stopWatchTime=new Date(0)
stopWatch.addEventListener('click',()=>{
    if(stopIsOn)
    {
        
        stopIsOn=false
        time=setInterval(updateTime,1000)
    }
    else
    {
        stopIsOn=true
    clearInterval(time)
    s=0
    m=0
    h=0
    time=setInterval(function(){
        s++
        if(s===60)
        {
            s=0
            m++
        }
        if(m===60)
        {
            m=0
            h++
        }
        
    document.getElementById("seconds").innerText=s
    document.getElementById("minutes").innerText=m+":"
    document.getElementById("hours").innerText=h+":"


    },1000)
}
  
    
  
    
})

