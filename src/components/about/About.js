import React from 'react'
import './About.css';
import {FormattedMessage} from 'react-intl';
import cv from './AdrianRossinoCV.pdf'

export default function About() {
  const aboutMessages = [
    {
      id: "about-greet",
      defaultMessage: "Hi, I'm Adrian Rossino",
      description : "About greeting",
      className : "about-greet"
    },
    {
      id : "about-body-1",
      defaultMessage : "I'm a full stack developer with a passion for everything interactive, a passion I inherited from being a gamer.",
      description : "About body",
      className : "about-body"
    },
    {
      id : "about-body-2",
      defaultMessage : "I've never been shy of a good challenge, I love doing new things and learning new things (even more if those things have to do with computers, video games or entertainment).",
      description : "About body",
      className : "about-body"
    },
    {
      
      id: "about-body-3",
      defaultMessage : "I have a creative mind and I'm always thinking of ways to make everything better, from a story to a solution, a character or a joke, I love to create things.",
      description : "About body",
      className : "about-body"
    },
    {
      id: "about-body-4",
      defaultMessage: "I love what I do and I'm one of the few that will love it till his last breath.",
      description : "About body",
      className : "about-body"
    },
    {
      id: "about-body-5",
      defaultMessage: "I'm also a very good team player and I've been told I make a great leader, so that's always a plus.",
      description : "About body",
      className : "about-body"
    }

  ]

  return (
    <div id="nav-about-link" className="about" >
      {
        aboutMessages.map( item =>
          <p className={item.className} key={item.id}>
            <FormattedMessage 
              id={item.id}
              defaultMessage={item.defaultMessage}
              description={item.description}
            />
          </p>
        )
      }

      <a href={cv} download className="about_download">
        <FormattedMessage 
          id="download-link"
          defaultMessage="Download my resume"
          description="Resume download link"
        />
      </a>
      
    </div>
  )
}
