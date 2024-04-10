import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';

function HeaderBar(props) {
  const [title, setTitle] = useState("Seratoth")

  useEffect(() => {
  })

  return(
    <div>
      {title}
    </div>
  )
}

export default HeaderBar;