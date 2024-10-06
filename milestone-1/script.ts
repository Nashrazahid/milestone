document.getElementById("toggled-wrap-skills")?.addEventListener("click",function(){
    const skillsbox=document.getElementById("skillsbox");
    if(skillsbox){
        if(skillsbox.style.display==="none"){
            skillsbox.style.display="block";
        }else{
            skillsbox.style.display="none";
        }
    }
});