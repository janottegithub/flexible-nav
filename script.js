var btn  = document.querySelector('button');
 
    btn.addEventListener('click', myFunction);

    function myFunction(){
        
        var left = document.getElementsByClassName('left')

        var tl = new TimelineMax();

        tl.to('path#start', 1.5, {
            x: '-10%',
            ease: Expo.easeInOut
        })
    
        tl.to("path#start", 2, {
            attr: {
                d: "M24-48H391.837C193.4,367.237,565.913,513.078,391.473,1032.037c0,.053-367.473,0-367.473,0Z",
                d: "M24-48H391.837c-.037-.036-.361,1080-.363,1080.037,0,.053-367.473,0-367.473,0Z",
            },
            ease: Elastic.easeOut
        }, "-=1");
    }


