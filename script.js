var lastScroll = 0
        const navbar = document.getElementById('navnav')
        const marq = document.getElementById('top-marquee')
        
        window.addEventListener('scroll', function(){
            var scrollUp = window.pageYOffset || document.documentElement.scrollTop
            if (scrollUp > lastScroll) {
                navbar.style.top='-100px'
                marq.style.top='-100px'
            } else {
                navbar.style.top='25px'
                marq.style.top='0'
            }
            lastScroll = scrollUp
        })