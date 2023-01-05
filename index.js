const images=[];
        images[0]="https://blog.geekster.in/wp-content/uploads/2021/09/Most-popular-full-stack-featured-image.png";
        images[1]="https://blog.geekster.in/wp-content/uploads/2021/08/Top-companies-you-can-work-at-after-completing-Full-Stack-Development-course-image.png";
        images[2]="https://blog.geekster.in/wp-content/uploads/2022/06/React-projects-featured-image.png";
        let i=0;
        var imgage=document.getElementById("picture");
        setInterval("next()", 5000);
        function previous() {
            i--;
            if(i==-1){
                i=2;
            }
            imgage.src=images[i];
        }
        function next() {
            i++;
            if(i==3){
                i=0;
            }
            imgage.src=images[i];
        }
        document.getElementById("btn1").addEventListener("click",previous)
        document.getElementById("btn2").addEventListener("click",next)