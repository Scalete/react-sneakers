import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyPage({imageUrl, title, text}) {
  return (
    <div className="empty">
        <img src={imageUrl} alt="Empty Smile" />
        <h2 className="empty-title">{title}</h2>
        <span className="empty-text">{text}</span>
        <Link to="/" className="action"><svg className="leftAnimation" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.714 7H1M7 13 1 7l6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Вернуться назад</Link>
    </div>
  )
}
