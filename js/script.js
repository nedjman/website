const spans = document.queryselectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
	span.classList.add('animated','rubber0and')
}))
spans.forEach(span =>span.addEventListener('mouseout',function(e){
	span.classList.remove('animated','rubber0and')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-html')
const jsBar = document.querySelector('.bar-html')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()
t1.fromTo(htmlBar,.75,{width:'calc(0% - 6px)'}, {width:'calc(90% - 6px)' ease:power4.easeOut})
   .fromTo(csslBar,.75,{width:'calc(0% - 6px)'}, {width:'calc(95% - 6px)' ease:power4.easeOut})
   .fromTo(jsBar,.75,{width:'calc(0% - 6px)'}, {width:'calc(75% - 6px)' ease:power4.easeOut})
   .fromTo(reactBar,.75,{width:'calc(0% - 6px)'}, {width:'calc(70% - 6px)' ease:power4.easeOut})

 const contoller = new ScrollMagic.Controller()
 const scene = new ScrollMagic.scene({
 	triggerElement:'.skills',
 	triggerHook:0
 })
 .setTween(t1)
 .addTo(contoller)

 const showRequiredCategory = event =>{
 	const getId = event.id 
 	const links = document.queryselectorAll('.work-category button')
 	for (i = 0; i <links.length; i++) {
 		if (links[i].hasAttribute('class')){
 			links[i].classList.remove('active')
 		}
 	}

 	event.classList.add('active')
 	const getCategory = document.querySelector('.category-S{getId}')
 	const categories = document.queryselectorAll('div[class ^= "category-"]')
 	for (i = 0; i < categories.length; i++) {
 		if (categories[i].hasAttribute('class')){
 			categories[i].classList.remove('showCategory')
 			categories[i].classList.add('hideCategory')
 	    }
 	}

 	getCategory.classList.remove('hideCategory')
 	getCategory.classList.add('showCategory')