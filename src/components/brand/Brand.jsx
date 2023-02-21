import React from 'react'
import './brand.css'
import { google, slack, shopify, atlassian, dropbox } from './import';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={ google } alt="google" />
        <img src={ slack } alt="slack" />
        <img src={ shopify } alt="shopify" />
        <img src={ atlassian } alt="atlassian" />
        <img src={ dropbox } alt="dropbox" />
      </div>
    </div>
  )
}

export default Brand