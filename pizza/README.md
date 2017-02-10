# Website Performance Optimization portfolio project
Welcome to my project!  I've worked hard and long on making this website a bit more performant!  


###Part 1: Optimize PageSpeed Insights score for index.html
####Fix 1
Here I started by removing the render blocking css by inlining the critcal css in the head of the html file.

####Fix 2
Added the async attribute to my JS files to keep them from being render blocking.
~~~
    <script src="js/perfmatters.js" async></script>
~~~

####Fix 3
Optimized the pizzeria image using grunt. Served the small image to the index page.

~~~
<li>
	<img style="width: 100px;" src="views/img/pizzeria-100_small.jpg">
	<a href="views/pizza.html">Cam's Pizzeria</a>
	<p>Who wants a performant pizza?</p>
</li>
~~~


###Part 2: Optimize Frames per Second in pizza.html
####Fix 1
Replaced querySelectorAll with getElementsByClassName
~~~
var items = document.getElementsByClassName('mover');
~~~

####Fix 2
Using some helpful code suggestions supplied by Paul <a href="https://www.html5rocks.com/en/tutorials/speed/animations/">here</a>, I was able to smooth out the sliding animation of the pizzas.  
~~~
var latestKnownScrollY = 0,
    ticking = false;

// callback for scroll event
function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
}

// requestAnimationFrame call
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updatePositions);
    }
    ticking = true;
}
~~~

####Fix 3
Reduced the amount of pizzas on the screen from 200 to 40.

~~~
document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    //200 pizzas is a bit much, don't you think?
    for (var i = 0; i < 40; i++) {
        var elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "images/pizza.png";
        elem.style.height = "100px";
        elem.style.width = "73.333px";
        elem.basicLeft = (i % cols) * s;
        elem.style.top = (Math.floor(i / cols) * s) + 'px';
        document.querySelector("#movingPizzas1").appendChild(elem);
    }
    updatePositions();
});
~~~

###Fix 4
Optimized the loop in updatePositions
~~~
for (var i = items.length; i--;) {
	var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
	items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
}
~~~
