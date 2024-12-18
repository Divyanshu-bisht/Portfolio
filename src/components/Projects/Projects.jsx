import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import ttc from "../../assets/ttc.png"
import rps from "../../assets/rps.png"
import cc from "../../assets/cc.png"
import af from "../../assets/af.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll: "body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll: "body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id="projects">
      <h1 id="para">1 YEAR EXPERIANCE IN PROJECTS</h1>
      <div className="slider">
        <Card title="TIC-TAC-TOE" image={ttc}/>
        <Card title="ROCK-PAPER-SCISSORS" image={rps}/>
        <Card title="CURRENCY-CONVERTER" image={cc}/>
        <Card title="AMAZON FRONTEND" image={af}/>
        {/* <Card title=""/> */}
      </div>
    </div>
  )
}

export default Projects
