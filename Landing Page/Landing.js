
            const icon = document.getElementsByClassName("icon")[0];
            const links = document.getElementsByClassName("links")[0];
            const scroll=document.getElementById("scrollUp");
            scroll.addEventListener("click",()=>{
                links.style.display="none";
                icon.style.display="block";
            })
            
            icon.addEventListener("click",()=>{
                // links.style.display=links.style.display=='flex'?'none':'flex';
                icon.style.display="none";
                links.style.display="block";
            });

            const popupStart=document.getElementsByClassName("playbtn")[0];
            const PopupBox=document.getElementsByClassName("PopupMain")[0];
            const popupEnd=document.getElementsByClassName("PopupClose")[0];
            const popupEnd2=document.getElementsByClassName("popup-footer")[0];
            popupStart.addEventListener("click",()=>{
                PopupBox.style.display="block";
            });
            popupEnd.addEventListener("click",()=>{
                PopupBox.style.display="none";
            });
            popupEnd2.addEventListener("click",()=>{
                PopupBox.style.display="none";
            });