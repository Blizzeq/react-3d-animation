import gsap from 'gsap';

export const scrollAnimation = (position,target,onUpdate) => {
    const tl = gsap.timeline();

    tl.to(position,{
        x: -3.38,
        y: -10.74,
        z: -5.93,
        scrollTrigger:{
            trigger: '.sound-section',
            start: 'top bottom',
            end: "top top",
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
}